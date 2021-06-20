import { MeshProps } from '@react-three/fiber'
import { useRef , useState } from 'react'
import * as THREE from 'three'

const RoadLine = (props: MeshProps) => {

    const mesh = useRef<THREE.Mesh>(null!)

    return (
        <>
            <mesh
                {...props}
                ref={mesh}

            >
                <bufferGeometry setFromPoints={[(0, 1, 1), (0, 2, 3)]} />
                <meshStandardMaterial color={'black'} />
            </mesh>
        </>
    )
}

export default RoadLine
