import { Line } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three'
import { Vector3 } from 'three';

extend({ Line_: THREE.Line })

const RoadLine = ({start, end}: {start: Vector3, end: Vector3}) => {

    return (
      <Line points={[start, end]} lineWidth={1} color='green'/>
    )
}

export default RoadLine
