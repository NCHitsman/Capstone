import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { worlds } from '../../customTypings'
import { RootState, useAppDispatch } from '../../store'
import { getCurrentWorld } from '../../store/worlds'

const WorldPage = () => {
    const dispatch = useAppDispatch()
    const { worldId } = useParams<{worldId: string}>()

    useEffect(() => {
        dispatch(getCurrentWorld(worldId))
    }, [dispatch, worldId])

    const world: worlds | null = useSelector((state: RootState) => state.worlds.currentWorld)

    return (
        <>
            <div>{world?.name}</div>
        </>
    )
}

export default WorldPage
