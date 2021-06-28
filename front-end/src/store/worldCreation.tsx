import { AnyAction } from "@reduxjs/toolkit"


export const SET_ACTION = 'worlds/SET_ACTION'



const worldCreationReducer = (state: {
    action: {
        type: string | null
        settlementType: number | null
    }
} = {
    action: {
        type: null,
        settlementType: null
    }
}, action: AnyAction) => {
    let newState;


    switch (action.type){
        case SET_ACTION:
            newState = {...state}
            newState.action = action.payload
            return newState;
        default:
            return state
    }
}


export default worldCreationReducer;
