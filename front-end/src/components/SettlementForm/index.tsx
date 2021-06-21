export {}

interface inputForm {
    settlementName: string;
    settlementType: string;
    createdYear: string;
}

const SettlementForm = ({form, index, inputList, setInputList}:
     {
        form: inputForm
        index: number
        inputList: inputForm[]
        setInputList: React.Dispatch<React.SetStateAction<inputForm[]>>
    }) => {


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        const name: string = e.target.name;
        const list: any = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleAdd = () => {
        setInputList([...inputList, { settlementName: '', settlementType: '1', createdYear: '' }])
    }

    const handleRemove = () => {
        const newList = [...inputList]
        newList.splice(index, 1);
        setInputList(newList)
    }


    return (
        <div>Settlement Form:
                        <label>Name:
                            <input
                                name={'settlementName'}
                                value={form.settlementName}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </label>
                        <label>Settlement Type:
                            <input
                                name={'settlementType'}
                                value={form.settlementType}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </label>
                        <label>Created Year::
                            <input
                                name={'createdYear'}
                                value={form.createdYear}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </label>
                        <button
                            onClick={() => handleRemove()}
                        >Remove</button>
                        <button
                            onClick={() => handleAdd()}
                        >Add</button>
                    </div>
    )
}


export default SettlementForm
