import WorldPreview from '../WorldPreview'
import './Home.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { getUserWorlds } from '../../store/worlds'
import { useEffect } from 'react'
import { useState } from 'react'

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
