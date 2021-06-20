import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { roads, settlements, worlds } from '../../customTypings'
import { RootState, useAppDispatch } from '../../store'
import { getCurrentRoads } from '../../store/roads'
import { getCurrentSettlements } from '../../store/settlements'
import { getCurrentWorld } from '../../store/worlds'
import WorldCanvas from '../WorldCanvas'

const WorldPage = () => {
    const dispatch = useAppDispatch()
    const { worldId } = useParams<{worldId: string}>()

    useEffect(() => {
        dispatch(getCurrentWorld(worldId))
    }, [dispatch, worldId])

    useEffect(() => {
        dispatch(getCurrentSettlements(worldId))
    }, [dispatch, worldId])

    useEffect(() => {
        dispatch(getCurrentRoads(worldId))
    }, [dispatch, worldId])

    const world: worlds | null = useSelector((state: RootState) => state.worlds.currentWorld)

    const settlements: settlements[] | null = useSelector((state: RootState) => state.settlements.currentSettlements)

    const roads: roads[] | null = useSelector((state: RootState) => state.roads.currentRoads)

    return (
        <>
            <WorldCanvas world={world} settlements={settlements} roads={roads}/>
        </>
    )
}

export default WorldPage
