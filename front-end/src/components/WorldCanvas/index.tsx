import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SettlementBox from '../SettlementBox'
import './WorldCanvas.css'
import { roads, settlements, settlement, worlds } from '../../customTypings'
import { useState } from 'react'
import { useMemo } from 'react'

const WorldCanvas = ({world, settlements, roads}: {world: worlds | null, settlements: settlements, roads: roads}) => {
    const [hidden, setHidden] = useState(true)
    const [selectedId, setSelectedId] = useState(0)


    const settlArray = useMemo(() => Object.values(settlements).map((settlement: settlement) =>
        <SettlementBox
        key={settlement.id}
        settlement={settlement}
        hidden={hidden}
        setHidden={setHidden}
        setSelectedId={setSelectedId}/>
        ), [settlements])


    return (
        <>
            {world && settlements ?
            <div>
                <Canvas
                className='WorldCanvas'
                camera={{ fov: 75, near: 0.1, far: 1000, position: [-65, 50, 0]}}>
                    <axesHelper />
                    <gridHelper args={[world?.world_size, world?.world_size]} position={[0, 0, 0]}/>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {settlArray.map((ele: JSX.Element) => ele)}
                </Canvas>


                <div className={hidden? 'settlement__cards__parent none':'settlement__cards__parent'}>
                    <div hidden={hidden}>
                        Name: {settlements[selectedId]?.name}
                    </div>
                    <div hidden={hidden}>
                        Type: {settlements[selectedId]?.type}
                    </div>
                    <div hidden={hidden}>
                        Population: {settlements[selectedId]?.population}
                    </div>
                    <div hidden={hidden}>
                        Wealth: {settlements[selectedId]?.wealth}
                    </div>
                    <button onClick={() => {
                        if (hidden === false) setHidden(true)
                    }}>Close</button>
                </div>
            </div>
            :
            <h1>Loading</h1>
            }
        </>
    )
}


export default WorldCanvas
