import { useMemo } from 'react';
import * as THREE from 'three'

const RoadLine = ({start, end}: {start: THREE.Vector3, end: THREE.Vector3}) => {

    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints([start, end]), [start, end]);

    return (
      <line>
        <primitive attach="geometry" object={geometry} />
        <lineBasicMaterial color="red"/>
      </line>
    )
}

export default RoadLine
