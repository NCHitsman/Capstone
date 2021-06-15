import { AnyAction } from "redux";
import { csrfFetch } from "./csrf";
import { ThunkAction, RootState } from './index'
import { worlds } from '../customTypings'

const USER_WORLDS = 'worlds/USER_WORLDS'

const userWorlds = (worlds: object[]) => {
    return {
        type: USER_WORLDS,
        payload: worlds
    }
}

export const getUserWorlds = (userId: number | null | undefined): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    if (userId) {
        const response = await csrfFetch(`/api/worlds/userWorlds/${userId}`)
        const data = await response.json()
        dispatch(userWorlds(data))
        return response
    }
}


const worldReducer = (state: {
    userWorlds: worlds[]} = {
         userWorlds: []
        },
    action: AnyAction) => {
    let newState;

    switch( action.type ) {
        case USER_WORLDS:
            newState = {...state}
            newState.userWorlds = action.payload
            return newState
        default:
            return state
    }
}


export default worldReducer;
