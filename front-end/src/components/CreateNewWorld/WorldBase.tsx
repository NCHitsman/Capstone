import { useState, memo } from "react";
import { createSettlementObject } from "../../customTypings";

const WorldBaseSquare = memo(({
  action,
  setAction,
  i,
  j,
  worldSize,
  setSettlementLists,
  settlementList,
  setSettlementName,
  setSettlementYear,
}: {
  action: {
    type: string;
    size: number;
  };
  setAction: React.Dispatch<
    React.SetStateAction<{
      type: string;
      size: number;
    }>
  >;
  i: number;
  j: number;
  worldSize: number;
  setSettlementLists: React.Dispatch<
    React.SetStateAction<createSettlementObject[]>
  >;
  settlementList: createSettlementObject[]
  setSettlementName: React.Dispatch<React.SetStateAction<string>>;
  setSettlementYear: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [hovered, setHover] = useState(false);
  const [color, setColor] = useState("black");
  const [x] = useState(i - (Math.floor(worldSize / 2)));
  const [y] = useState(j - (Math.floor(worldSize / 2)));
  const [z, setZ] = useState(0.001);
  const [scale, setScale] = useState(1);
  const colors = ["blue", "red", "green", "purple"];

  const setSettlement = () => {
    switch (action.type) {
      case "[STLM]":
        setColor(colors[action.size - 1]);
        setAction({ type: "", size: 0 });
        setZ(0.1);
        setScale(action.size);
        const settlementData: createSettlementObject = {
          type: action.size,
          x_cordinate: x,
          y_cordinate: y,
        }
        setSettlementLists([...settlementList, settlementData])
        setSettlementName('')
        setSettlementYear('')
        break
      case "[RDST]":


        break
      case "[RDEN]":


        break
      default:
        return
    }
  };

  console.log('renders')

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
});

export default WorldBaseSquare;
