import { worlds } from '../../customTypings'
import WorldPreview from '../WorldPreview'
import './Home.css'

const Home = ({ userWorlds }: { userWorlds: worlds[] }) => {

    return (
        <>
            <div className='worldPreview__container'>
                <div className='myWorlds__text'>My Worlds:</div>
                {userWorlds.map((world) => {
                    return (
                        <WorldPreview key={world.name} world={world} />
                    )
                })}
            </div>
        </>
    )
}

export default Home
