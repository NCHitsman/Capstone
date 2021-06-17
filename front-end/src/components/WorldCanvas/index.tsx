import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Box from '../Box'
import './WorldCanvas.css'
import { worlds } from '../../customTypings'

const WorldCanvas = ({world}: {world: worlds | null }) => {

    const myCamera = useRef()

    return (
        <Canvas className='WorldCanvas' >
            {/* <axesHelper />
            <gridHelper /> */}
            <PerspectiveCamera ref={myCamera} position={[0, 5, 5]} />
            <OrbitControls camera={myCamera.current} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[2., 0, 0]} />
            <Box position={[-2.5, 0, 0]}/>
        </Canvas>
    )
}


export default WorldCanvas
