import { MeshProps } from '@react-three/fiber'
import { useRef , useState } from 'react'
import * as THREE from 'three'
import { settlements } from '../../customTypings'

const SettlementBox = (props: MeshProps & {
    className: string,
    hidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    scale: number,
    color: string,
    setSettlementName: React.Dispatch<React.SetStateAction<string>>,
    setSettlementType: React.Dispatch<React.SetStateAction<string>>,
    setSettlementPop: React.Dispatch<React.SetStateAction<number>>,
    setSettlementWealth: React.Dispatch<React.SetStateAction<number>>,
    settlement: settlements
    } ) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>(null!)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead

    const settlementTypeConvert = (type: number) => {
      switch (type) {
          case 1:
              return 'Village'
          case 2:
              return 'Town'
          case 3:
              return 'City'
          default:
              return 'Capital'
      }
  }


    return (
      <>
        <mesh
          {...props}
          ref={mesh}
          onClick={(event) => {
            if (props.hidden) props.setHidden(false)
            props.setSettlementName(props.settlement.name)
            const res = settlementTypeConvert(props.settlement.type)
            props.setSettlementType(res)
            props.setSettlementPop(props.settlement.population)
            props.setSettlementWealth(props.settlement.wealth)
          }}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
      </>
    )
  }

export default SettlementBox
