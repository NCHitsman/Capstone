import { FormEvent, useState } from "react"
import { settlementObjectT } from '../../customTypings'


const SettlementForm = ({settlementObject, setSettlementObject}:
    { settlementObject : settlementObjectT[] | [],
    setSettlementObject: React.Dispatch<React.SetStateAction<settlementObjectT[] | []>>}) => {
    const [settlementName, setSettlementName] = useState('')
    const [settlementType, setSettlementType] = useState('1')
    const [createdYear, setCreatedYear] = useState('')

    const createNewSettlementSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSettlementObject([...settlementObject, {settlementName, settlementType, createdYear}])
    }

    return (
        <>
            <div>Settlement Form:</div>
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
                <input type="submit" value="Add Settlement" />
            </form>
        </>
    )
}

export default SettlementForm
