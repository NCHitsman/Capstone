import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SettlementBox from '../SettlementBox'
import './WorldCanvas.css'
import { settlements, worlds } from '../../customTypings'
import { useState } from 'react'
import { useEffect } from 'react'

const WorldCanvas = ({world, settlements}: {world: worlds | null, settlements: settlements[] | null}) => {
    const [hidden, setHidden] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)

    const settlementType = (type: number) => {
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

    useEffect(() => {
        if (world && settlements) {
            setIsLoaded(true)
        }
    }, [world, settlements])

    return (
        <>
            {isLoaded ?
            <>
                <Canvas className='WorldCanvas' camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 50, 65] }}>
                    <axesHelper />
                    <gridHelper args={[world?.world_size, world?.world_size]}/>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {settlements?.map(settlement => {
                        return (
                            <SettlementBox hidden={hidden} setHidden={setHidden} key={settlement.id} position={[settlement.x_cordinate, 0, settlement.y_cordinate]}
                            scale={ settlement.type === 1 ? 1 :
                                    settlement.type === 2 ? 2 :
                                    settlement.type === 3 ? 3 : 4
                            }
                            color={ settlement.type === 1 ? 'lightblue' :
                                    settlement.type === 2 ? 'green' :
                                    settlement.type === 3 ? 'yellow' : 'red'
                            }
                            />
                        )
                    })}
                </Canvas>
                <div className={hidden? 'settlement__cards__parent none':'settlement__cards__parent'}>
                    {settlements?.map(settlement => {
                        return (
                            <div key={settlement.id} className='settlement__info__cont' hidden={hidden} style={{backgroundColor:
                            settlement.type === 1 ? 'lightblue' :
                            settlement.type === 2 ? 'green' :
                            settlement.type === 3 ? 'yellow' : 'red'}}>
                                <div hidden={hidden}>
                                    Name: {settlement.name}
                                </div>
                                <div hidden={hidden}>
                                    Type: {settlementType(settlement.type)}
                                </div>
                                <div hidden={hidden}>
                                    Population: {settlement.population}
                                </div>
                                <div hidden={hidden}>
                                    Wealth: {settlement.wealth}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
            :
            <h1>Loading</h1>
            }
        </>
    )
}


export default WorldCanvas
