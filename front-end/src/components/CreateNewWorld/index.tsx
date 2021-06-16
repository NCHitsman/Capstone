import { FormEvent, useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { createNewWorld } from '../../store/worlds'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const CreateNewWorld = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [worldName, setWorldName] = useState('')
    const [worldSize, setWorldSize] = useState('25')
    const [startingYear, setStartingYear] = useState('')

    const currentUserId = useSelector((state: RootState )=> state.session.user?.id)


    const createNewWorldSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const worldId = await dispatch(createNewWorld(worldName, +worldSize, +startingYear, currentUserId))
        // await dispatch(getUserWorlds(currentUserId))

        // TODO: Create Dispatches for making Settlements with World data

        history.push(`/world/${worldId}`)
    }

    return (
        <>
            <form  onSubmit={createNewWorldSubmitHandler}>
                <label>
                    Name:
                    <input
                    type='text'
                    value={worldName}
                    onChange={e => setWorldName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    World Size:
                    <select
                    value={worldSize}
                    onChange={e => setWorldSize(e.target.value)}
                    >
                        <option value='25' >25x25</option>
                        <option value='50' >50x50</option>
                        <option value='100' >100x100</option>
                        <option value='150' >150x150</option>
                    </select>
                </label>
                <label>
                    Starting Year:
                    <input
                    type='number'
                    value={startingYear}
                    onChange={e => setStartingYear(e.target.value)}
                    required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default CreateNewWorld
