import { FormEvent, useState, useCallback } from "react";
import { RootState, useAppDispatch } from "../../store";
import { createNewWorld, SET_ACTION } from "../../store/worlds";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewSettlement } from "../../store/settlements";
import SettlementForm from "../SettlementForm";
import CreateNewWorldCanvas from "./CreateNewWorldCanvas";
import { createSettlementObject } from "../../customTypings";

const CreateNewWorld = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [worldName, setWorldName] = useState("");
  const [worldSize, setWorldSize] = useState("50");
  const [startingYear, setStartingYear] = useState("");
  const [action, setAction] = useState<{ type: string; size: number }>({
    type: "",
    size: 1,
  });
  const [settlementSize, setSettlementSize] = useState(1);
  const [settlementList, setSettlementLists] = useState<
    createSettlementObject[]
  >([]);
  const [settlementName, setSettlementName] = useState("");
  const [settlementNames, setSettlementNames] = useState<string[]>([]);
  const [settlementYear, setSettlementYear] = useState("");
  const [settlementYears, setSettlementYears] = useState<string[]>([]);

  const currentUserId = useSelector(
    (state: RootState) => state.session.user?.id
  );

  const createNewWorldSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const worldId: void | number = await dispatch<void | number>(
      createNewWorld(worldName, +worldSize, +startingYear, currentUserId)
    );
    if (worldId) {
      settlementList.forEach(async (settlementData, i) => {
        const { type, x_cordinate, y_cordinate } = settlementData;
        await dispatch(
          createNewSettlement(
            settlementNames[i],
            worldId,
            +worldSize,
            type,
            +settlementYears[i],
            x_cordinate,
            y_cordinate
          )
        );
      });
    }
    history.push(`/world/${worldId}`);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>World Form:</div>
        <form onSubmit={createNewWorldSubmitHandler}>
          <label>
            Name:
            <input
              type="text"
              value={worldName}
              onChange={(e) => setWorldName(e.target.value)}
              required
            />
          </label>
          <label>
            World Size:
            <select
              value={worldSize}
              onChange={(e) => setWorldSize(e.target.value)}
            >
              <option value="50">50x50</option>
              <option value="100">100x100</option>
              <option value="150">150x150</option>
            </select>
          </label>
          <label>
            Starting Year:
            <input
              type="number"
              value={startingYear}
              onChange={(e) => setStartingYear(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <label>
          Name
          <input
            value={settlementName}
            onChange={(e) => setSettlementName(e.target.value)}
          ></input>
        </label>

        <label>
          Starting Year
          <input
            type="number"
            value={settlementYear}
            onChange={(e) => setSettlementYear(e.target.value)}
          ></input>
        </label>

        <select
          value={settlementSize}
          onChange={(e) => setSettlementSize(+e.target.value)}
        >
          <option value={1}>Village</option>
          <option value={2}>Town</option>
          <option value={3}>City</option>
          <option value={4}>Capital</option>
        </select>

        <button
          onClick={() => {
            setSettlementYears([...settlementYears, settlementYear]);
            setSettlementNames([...settlementNames, settlementName]);
            setAction({ type: "[STLM]", size: settlementSize });
            dispatch({ type: SET_ACTION, payload: action });
          }}
        >
          Make Settlement
        </button>
      </div>
      <CreateNewWorldCanvas
        setSettlementLists={setSettlementLists}
        settlementList={settlementList}
        action={action}
        setAction={setAction}
        worldSize={+worldSize}
        setSettlementName={setSettlementName}
        setSettlementYear={setSettlementYear}
      />
    </>
  );
};

export default CreateNewWorld;
