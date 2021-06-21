import { Line } from '@react-three/drei';
import { extend } from '@react-three/fiber';
// import { useLayoutEffect } from 'react';
// import { useRef } from 'react';
import * as THREE from 'three'
import { Vector3 } from 'three';

extend({ Line_: THREE.Line })

const RoadLine = ({start, end}: {start: Vector3, end: Vector3}) => {

    // const ref = useRef<THREE.Line>(null!)

    // useLayoutEffect(() => {
    //   ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
    // }, [start, end])

    return (
      // <line_ ref={ref}>
      //   <bufferGeometry />
      //   <lineBasicMaterial color="red"/>
      // </line_>
      <Line points={[start, end]} lineWidth={1} color='green'/>
    )
}

export default RoadLine
