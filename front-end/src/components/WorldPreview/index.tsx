import { worlds } from '../../customTypings'
import './WorldPreview.css'
import { useHistory } from 'react-router-dom'

const WorldPreview = ({ world }: { world: worlds }) => {
    const history = useHistory()


    return (
        <>
            <button
            className='worldPreview__cont__button'
            onClick={(e) => history.push(`/world/${world.id}`)}
            >
                <div>{world.name}</div>
            </button>
        </>
    )
}

export default WorldPreview
