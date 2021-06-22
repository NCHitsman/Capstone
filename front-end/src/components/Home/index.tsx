import WorldPreview from '../WorldPreview'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { clearCurrentWorld, getUserWorlds } from '../../store/worlds'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
import { clearCurrentRoads } from '../../store/roads'
import { clearCurrentSettlements } from '../../store/settlements'




/*junctions, 2darray, path calculation, 2d array save as objects, type; world lithography,

dont render worldcanvas until 2d done and pass in {2d array, settlements[], roads[], junctions[]},

2d array to generate graph with nodes of towns, roads, junctions*/




const Home = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const currentUserId = useSelector((state: RootState)  => state.session?.user?.id)
    const [isLoaded, setIsLoaded] = useState(false);
    const userWorlds = useSelector((state: RootState )=> state.worlds.userWorlds)

    useEffect(() => {
        dispatch(getUserWorlds(currentUserId))
      }, [dispatch, currentUserId])

    useEffect(() => {
        if (userWorlds) {
            setIsLoaded(true)
        }
    }, [userWorlds, isLoaded])

    useEffect(() => {
        console.log('yo')
        dispatch(clearCurrentRoads())
        dispatch(clearCurrentSettlements())
        dispatch(clearCurrentWorld())
    }, [dispatch])

    return (
        <div className='home__contents__container'>
            {isLoaded && (
                <div className='worldPreview__container'>
                    <div className='myWorlds__text'>My Worlds:</div>
                    {userWorlds.map((world) => {
                        return (
                            <WorldPreview key={world.name} world={world} />
                        )
                    })}
                    <button
                    className='createNewWorld__button'
                    onClick={e => history.push('/create-new-world')}
                    >
                        Create New World
                    </button>
                </div>
            )}
        </div>
    )
}

export default Home
