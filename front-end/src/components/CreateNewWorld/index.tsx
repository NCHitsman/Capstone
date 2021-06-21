import { FormEvent, useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { createNewWorld } from '../../store/worlds'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewSettlement } from '../../store/settlements';
import SettlementForm from '../SettlementForm';

const CreateNewWorld = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [worldName, setWorldName] = useState('')
    const [worldSize, setWorldSize] = useState('25')
    const [startingYear, setStartingYear] = useState('')
    const [inputList, setInputList] = useState([{ settlementName: '', settlementType: '1', createdYear: '' }]);

    const currentUserId = useSelector((state: RootState )=> state.session.user?.id)



    const createNewWorldSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const worldId: void | number = await dispatch<void | number>(createNewWorld(worldName, +worldSize, +startingYear, currentUserId))


        if (worldId) {
            inputList.forEach(async settlementData => {
                const {settlementName, settlementType, createdYear} = settlementData
                await dispatch(createNewSettlement(settlementName, worldId, +worldSize, +settlementType, +createdYear))
            })
        }


        history.push(`/world/${worldId}`)
    }



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

            {inputList.map((form, index) => {
                return (
                    <SettlementForm form={form} index={index} inputList={inputList} setInputList={setInputList} />
                )
            })}

        </>
    )
}

export default CreateNewWorld
