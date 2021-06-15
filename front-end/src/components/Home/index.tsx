import { worlds } from '../../customTypings'


const Home = ({ userWorlds }: { userWorlds: worlds[] }) => {

    return (
        <>
            {userWorlds.map((world) => {
                return (
                    <div key={world.name} >{world.name}</div>
                )
            })}
        </>
    )
}

export default Home
