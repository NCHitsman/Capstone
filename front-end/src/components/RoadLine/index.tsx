import * as THREE from 'three'

const RoadLine = ({start, end}: {start: THREE.Vector3, end: THREE.Vector3}) => {



    return (
        <line>
            <bufferGeometry setFromPoints={() => new THREE.BufferGeometry().setFromPoints([start, end])}/>
            <lineBasicMaterial color={'green'}/>
        </line>
    )
}

export default RoadLine
