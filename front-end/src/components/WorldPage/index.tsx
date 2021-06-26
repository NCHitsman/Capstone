import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TwoDArrayMaker from "../../2DArrayMaker";
import { roads, settlements, worlds } from "../../customTypings";
import { RootState, useAppDispatch } from "../../store";
import { getCurrentRoads } from "../../store/roads";
import { getCurrentSettlements } from "../../store/settlements";
import { getCurrentWorld } from "../../store/worlds";
import WorldCanvas from "../WorldCanvas";

const WorldPage = () => {
  const dispatch = useAppDispatch();
  const { worldId } = useParams<{ worldId: string }>();

  useEffect(() => {
    dispatch(getCurrentWorld(worldId));
  }, [dispatch, worldId]);

  useEffect(() => {
    dispatch(getCurrentSettlements(worldId));
  }, [dispatch, worldId]);

  useEffect(() => {
    dispatch(getCurrentRoads(worldId));
  }, [dispatch, worldId]);

  const world: worlds | null = useSelector(
    (state: RootState) => state.worlds.currentWorld
  );

  const settlements: settlements = useSelector(
    (state: RootState) => state.settlements
  );

  const roads: roads = useSelector((state: RootState) => state.roads);

  if (world && settlements && roads) {
    TwoDArrayMaker(world, settlements, roads);
  }

  return (
    //TODO 2D array maker
    <>
      <WorldCanvas world={world} settlements={settlements} roads={roads} />
    </>
  );
};

export default WorldPage;
