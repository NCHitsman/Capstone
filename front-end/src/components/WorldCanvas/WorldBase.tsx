import { useState } from "react"


const WorldBaseSquare = ({action, setAction, i, j, worldSize}: {
    action: string,
    setAction: React.Dispatch<React.SetStateAction<string>>,
    i: number,
    j: number,
    worldSize: number
}) => {
    const [hovered, setHover] = useState(false)
    const [height, setHeight] = useState(0.001)
    const [color, setColor] = useState('black')

    let vr = (worldSize / 2) - 0.5


    return (
        <>
            <mesh
                position={[i-vr, 0, j-vr]}
                onPointerOver={(e) => setHover(true)}
                onPointerOut={(e) => setHover(false)}
                onClick={(e) => {
                    if (action == '[STLM]') {
                        setHeight(5)
                        setColor('blue')
                        setAction('')
                    }
                }}
            >
                <boxGeometry args={[1, height, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : color} />
            </mesh>
        </>
    )

}

export default WorldBaseSquare
