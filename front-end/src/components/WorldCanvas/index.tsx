import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SettlementBox from '../SettlementBox'
import './WorldCanvas.css'
import { roads, settlements, settlement, worlds } from '../../customTypings'
import { useState } from 'react'
import { useEffect } from 'react'
import RoadLine from '../RoadLine'
import * as THREE from 'three'
import WorldBaseSquare from './WorldBase'
import { useMemo } from 'react'
import { Vector3 } from 'three'

const WorldCanvas = ({world, settlements, roads}: {world: worlds | null, settlements: settlements, roads: roads}) => {
    const [hidden, setHidden] = useState(true)
    const [settlementName, setSettlementName] = useState('')
    const [settlementType, setSettlementType] = useState('')
    const [settlementPop, setSettlementPop] = useState(1)
    const [settlementWealth, setSettlementWealth] = useState(0)
    const [action, setAction] = useState('')


    const memo = useMemo(() => {
        let memoArray: Vector3[] = []
        Object.values(roads).forEach(road => {
            memoArray.push(new THREE.Vector3(Math.random() * 10,0,Math.random() * 10)) //TODO FIX MEMO ISSUE AND RERENDERING WHEN SETTLEMENT INFO SHOWN
        })
        return memoArray
    }, [roads])

    const array: number[] = []
    if (world) {
        for (let i = 0; i <= world?.world_size; i++) {
            array.push(i)
        }
    }

    return (
        <>
            {world && settlements ?
            <div>
                <button
                onClick={(e) => setAction('[STLM]')}
                >make settlement</button>
                <Canvas
                className='WorldCanvas'
                camera={{ fov: 75, near: 0.1, far: 1000, position: [-65, 50, 0]}}
                >
                    <axesHelper />
                    {/* <gridHelper args={[world?.world_size, world?.world_size]} position={[0, 0, 0]}/> */}
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
                            position={[settlement.x_cordinate,
                                settlement.type === 1 ? .5 :
                                settlement.type === 2 ? 1 :
                                settlement.type === 3 ? 1.5 : 2,
                                settlement.y_cordinate]}
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
                    {Object.values(roads)?.map((road: any, i) => {
                        return (
                            <RoadLine
                            key={road.id}
                            start={memo[i]}
                            end={new THREE.Vector3(1,0,1)}
                            />
                        )
                    })}


                    {array.map((a, i) => {
                        return (
                            array.map((b, j) => {
                                return (
                                    <WorldBaseSquare key={b} action={action} setAction={setAction} i={i} j ={j} worldSize={world.world_size}/>
                                )
                            })
                        )
                    })}


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
