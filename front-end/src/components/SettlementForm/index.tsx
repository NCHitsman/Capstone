import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../store"
import { createNewSettlement, getCurrentSettlements } from '../../store/settlement'


const SettlementForm = ({worldId, worldSize}: { worldId: number, worldSize: number}) => {
    const dispatch = useAppDispatch()
    const [settlementName, setSettlementName] = useState('')
    const [settlementType, setSettlementType] = useState('1')
    const [createdYear, setCreatedYear] = useState('')

    const createNewSettlementSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(createNewSettlement(settlementName, worldId, worldSize, +settlementType, +createdYear))
        dispatch(getCurrentSettlements(worldId.toString()))
    }

    return (
        <>
        <form  onSubmit={createNewSettlementSubmitHandler}>
            <label>
                Name:
                <input
                type='text'
                value={settlementName}
                onChange={e => setSettlementName(e.target.value)}
                required
                />
            </label>
            <label>
                Settlement Type:
                <select
                value={settlementType}
                onChange={e => setSettlementType(e.target.value)}
                >
                    <option value='1' >Village</option>
                    <option value='2' >Town</option>
                    <option value='3' >City</option>
                    <option value='4' >Capital</option>
                </select>
            </label>
            <label>
                Created Year:
                <input
                type='number'
                value={createdYear}
                onChange={e => setCreatedYear(e.target.value)}
                required
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </>
    )
}

export default SettlementForm
