import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import WorldBaseSquare from "./WorldBase";
import { createSettlementObject } from "../../customTypings";

const CreateNewWorldCanvas = ({
  worldSize,
  action,
  setAction,
  setSettlementLists,
  settlementList,
  settlementName,
  settlementYear,
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
  worldSize: number;
  setSettlementLists: React.Dispatch<
    React.SetStateAction<createSettlementObject[]>
  >;
  settlementList: createSettlementObject[]
  settlementName: string;
  setSettlementName: React.Dispatch<React.SetStateAction<string>>;
  settlementYear: string;
  setSettlementYear: React.Dispatch<React.SetStateAction<string>>;
}) => {

  const array: number[] = [];
  if (worldSize) {
    for (let i = 0; i <= worldSize; i++) {
      array.push(i);
    }
  }

  return (
    <>
      <Canvas
        className="WorldCanvas"
        camera={{ fov: 75, near: 0.1, far: 1000, position: [-65, 50, 0] }}
      >
        {/* <axesHelper /> */}
        {/* <gridHelper args={[worldSize, worldSize]} position={[0, 0, 0]} /> */}
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {array.map((a, i) => {
          // * THE BOTTOM PLANE USED FOR SETTLEMENT PLACING
          return array.map((b, j) => {
            return (
              <WorldBaseSquare
                key={b}
                action={action}
                setAction={setAction}
                i={i}
                j={j}
                worldSize={worldSize}
                setSettlementLists={setSettlementLists}
                settlementName={settlementName}
                setSettlementName={setSettlementName}
                settlementYear={settlementYear}
                setSettlementYear={setSettlementYear}
                settlementList={settlementList}
              />
            );
          });
        })}
      </Canvas>
    </>
  );
};

export default CreateNewWorldCanvas;
