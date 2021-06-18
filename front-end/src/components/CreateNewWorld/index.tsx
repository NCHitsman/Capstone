import { FormEvent, useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { createNewWorld } from '../../store/worlds'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SettlementForm from '../SettlementForm';
import { settlementObjectT } from '../../customTypings'
import { createNewSettlement } from '../../store/settlement';

const CreateNewWorld = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [worldName, setWorldName] = useState('')
    const [worldSize, setWorldSize] = useState('25')
    const [startingYear, setStartingYear] = useState('')
    const [settlementObject, setSettlementObject] = useState<settlementObjectT[] | []>([]) //holds all settlements made using the settlement form

    const currentUserId = useSelector((state: RootState )=> state.session.user?.id)

    const createNewWorldSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const worldId: void | number = await dispatch<void | number>(createNewWorld(worldName, +worldSize, +startingYear, currentUserId))
        if (worldId) {
            settlementObject.forEach(async settlementData => {
                const {settlementName, settlementType, createdYear} = settlementData
                await dispatch(createNewSettlement(settlementName, worldId, +worldSize, +settlementType, +createdYear))
            })
        }
        history.push(`/world/${worldId}`)
    }


    // const createSettlementForm = () => {
    //     return (
    //         <SettlementForm settlementObject={settlementObject} setSettlementObject={setSettlementObject} /> // ToDo make this work some how
    //     )
    // }


    return (
        <>

            <div>.</div>
            <div>.</div>
            <div>.</div>


            <div>World Form:</div>
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

            <div>.</div>
            <div>.</div>
            <div>.</div>

            <SettlementForm settlementObject={settlementObject} setSettlementObject={setSettlementObject} />


            {/* <button
            onClick = {e => {createSettlementForm()}} // ToDo make this work some how
            >Create Settlement</button> */}


        </>
    )
}

export default CreateNewWorld
