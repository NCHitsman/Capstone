import { MeshProps, useFrame } from '@react-three/fiber'
import { useRef , useState } from 'react'
import * as THREE from 'three'

const SettlementBox = (props: MeshProps & {
    hidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    scale: number,
    color: string
    } ) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>(null!)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead


    useFrame(() => {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    })

    return (
      <>
        <mesh
          {...props}
          ref={mesh}
          scale={active ? props.scale + (props.scale / 2) : props.scale}
          onClick={(event) => {
            setActive(!active)
            if (props.hidden) {
              props.setHidden(false)
            } else {
              props.setHidden(true)
            }
          }}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
      </>
    )
  }

export default SettlementBox
