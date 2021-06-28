import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { createSettlementObject } from "../../customTypings";
import { RootState, useAppDispatch } from "../../store";
import { SET_ACTION } from "../../store/worldCreation";

const WorldBaseSquare = memo(
  ({
    i,
    j,
    worldSize,
    setSettlementLists,
    settlementList,
    setSettlementName,
    setSettlementYear,
  }: {
    i: number;
    j: number;
    worldSize: number;
    setSettlementLists: React.Dispatch<
      React.SetStateAction<createSettlementObject[]>
    >;
    settlementList: createSettlementObject[];
    setSettlementName: React.Dispatch<React.SetStateAction<string>>;
    setSettlementYear: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    // const dispatch = useAppDispatch()
    const [hovered, setHover] = useState(false);
    const [color, setColor] = useState("black");
    const [x] = useState(i - Math.floor(worldSize / 2));
    const [y] = useState(j - Math.floor(worldSize / 2));
    const [z, setZ] = useState(0.001);
    const [scale, setScale] = useState(1);
    const colors = ["blue", "red", "green", "purple"];
    // const action = useSelector((state: RootState) => state.worldCreation?.action) // TODO FIGURE OUT WHY THIS ISNT WORKING EVEN THOUGH IT SHOULD?

    const setSettlement = () => {
      // switch (action.type) {
      //   case "[STLM]":
      //     if (action.settlementType) {
      //     setColor(colors[action.settlementType - 1]);
      //     setZ(0.1);
      //     setScale(action.settlementType);
      //     const settlementData: createSettlementObject = {
      //       type: action.settlementType,
      //       x_cordinate: x,
      //       y_cordinate: y,
      //     }
      //     setSettlementLists([...settlementList, settlementData])
      //     setSettlementName('')
      //     setSettlementYear('')
      //     // dispatch({ type: SET_ACTION, payload: { type: null, size: null } })
      //     }
      //     break
      //   case "[RDST]":
      //     break
      //   case "[RDEN]":
      //     break
      //   default:
      //     return
      // }
    };

    console.log("renders");

    return (
      <>
        <mesh
          position={[x, 0, y]}
          onPointerOver={(e) => {
            setHover(true);
          }}
          onPointerOut={(e) => {
            setHover(false);
          }}
          onClick={(e) => setSettlement()}
          scale={scale}
        >
          <boxGeometry args={[1, z, 1]} />
          <meshStandardMaterial color={hovered ? "hotpink" : color} />
        </mesh>
      </>
    );
  }
);

export default WorldBaseSquare;
