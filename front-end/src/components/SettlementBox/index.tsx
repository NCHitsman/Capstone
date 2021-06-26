import { useRef, useState } from "react";
import * as THREE from "three";
import { settlement } from "../../customTypings";

const SettlementBox = ({
  hidden,
  setHidden,
  setSelectedId,
  settlement,
}: {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  settlement: settlement;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  let typeInfo: [number, number, string] =
    settlement.type === 1
      ? [0.5, 1, "lightblue"]
      : settlement.type === 2
      ? [1, 2, "green"]
      : settlement.type === 3
      ? [1.5, 3, "yellow"]
      : [2, 4, "red"];

  console.log("render");

  return (
    <>
      <mesh
        ref={mesh}
        onClick={(e) => {
          if (hidden) setHidden(false);
          setSelectedId(settlement.id);
        }}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        position={[settlement.x_cordinate, typeInfo[0], settlement.y_cordinate]}
        scale={typeInfo[1]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : typeInfo[2]} />
      </mesh>
    </>
  );
};

export default SettlementBox;
