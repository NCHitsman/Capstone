import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

const RoadLine = ({start, end}: {start: Vector3, end: Vector3}) => {

    return (
      <Line points={[start, end]} lineWidth={1} color='green'/>
    )
}

export default RoadLine
