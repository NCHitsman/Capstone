import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SettlementBox from '../SettlementBox'
import './WorldCanvas.css'
import { roads, settlements, settlement, worlds } from '../../customTypings'
import { useState } from 'react'
import { useEffect } from 'react'
// import RoadLine from '../RoadLine'
// import * as THREE from 'three'

const WorldCanvas = ({world, settlements, roads}: {world: worlds | null, settlements: settlements, roads: roads}) => {
    const [hidden, setHidden] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [settlementName, setSettlementName] = useState('')
    const [settlementType, setSettlementType] = useState('')
    const [settlementPop, setSettlementPop] = useState(0)
    const [settlementWealth, setSettlementWealth] = useState(0)

    useEffect(() => {
        if ((world && settlements)) {
            setIsLoaded(true)
        }
    }, [world, settlements])

    return (
        <>
            {isLoaded ?
            <div
            // onClick={() => hidden == false ? setHidden(true) : x=0}
            >
                <Canvas
                className='WorldCanvas'
                camera={{ fov: 75, near: 0.1, far: 1000, position: [-65, 50, 0]
                }}>
                    <axesHelper />
                    <gridHelper args={[world?.world_size, world?.world_size]} position={[(world!.world_size / 2), 0, (world!.world_size / 2)]}/>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {Object.values(settlements)?.map((settlement: settlement) => {
                        return (
                            <SettlementBox
                            className='settlementBox'
                            hidden={hidden}
                            setHidden={setHidden}
                            key={settlement.id}
                            position={[settlement.x_cordinate, 0, settlement.y_cordinate]}
                            scale={
                                settlement.type === 1 ? 1 :
                                settlement.type === 2 ? 2 :
                                settlement.type === 3 ? 3 : 4
                                // 1
                            }
                            color={
                                settlement.type === 1 ? 'lightblue' :
                                settlement.type === 2 ? 'green' :
                                settlement.type === 3 ? 'yellow' : 'red'
                                // 'red'
                            }
                            setSettlementName={setSettlementName}
                            setSettlementType={setSettlementType}
                            setSettlementPop={setSettlementPop}
                            setSettlementWealth={setSettlementWealth} //TODO just send back settlement
                            settlement={settlement}
                            />
                        )
                    })}
                    {/* {Object.values(roads)?.map((road: road) => {
                        let x1 = road.x_cordinate
                        let y1 = road.y_cordinate
                        return (
                            <RoadLine
                            key={road.id}
                            start={new THREE.Vector3(x1,0,y1)}
                            end={new THREE.Vector3(1,0,1)}
                            />
                        )
                    })} */}
                </Canvas>
                <div className={hidden? 'settlement__cards__parent none':'settlement__cards__parent'}>
                    <div hidden={hidden}>
                        Name: {settlementName}
                    </div>
                    <div hidden={hidden}>
                        Type: {settlementType}
                    </div>
                    <div hidden={hidden}>
                        Population: {settlementPop}
                    </div>
                    <div hidden={hidden}>
                        Wealth: {settlementWealth}
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
