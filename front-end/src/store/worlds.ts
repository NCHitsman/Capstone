import { AnyAction } from "redux";
import { csrfFetch } from "./csrf";
import { ThunkAction, RootState } from './index'
import { worlds } from '../customTypings'

const USER_WORLDS = 'worlds/USER_WORLDS'
const CURRENT_WORLD = 'worlds/CURRENT_WORLD'

const userWorlds = (worlds: object[]) => {
    return {
        type: USER_WORLDS,
        payload: worlds
    }
}

const currentWorld = (world: object) => {
    return {
        type: CURRENT_WORLD,
        payload: world
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

export const getCurrentWorld = (worldId: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await csrfFetch(`/api/worlds/getWorld/${worldId}`)
    const data = await response.json()
    dispatch(currentWorld(data))
    return response
}


const worldReducer = (state: {
    userWorlds: worlds[],
    currentWorld: worlds | null
} = {
         userWorlds: [],
         currentWorld: null
        },
    action: AnyAction) => {
    let newState;

    switch( action.type ) {
        case USER_WORLDS:
            newState = {...state}
            newState.userWorlds = action.payload
            return newState
        case CURRENT_WORLD:
            newState = {...state}
            newState.currentWorld = action.payload
            return newState
        default:
            return state
    }
}


export default worldReducer;
