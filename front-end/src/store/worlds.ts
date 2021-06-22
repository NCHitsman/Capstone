import { AnyAction } from "redux";
import { csrfFetch } from "./csrf";
import { ThunkAction, RootState } from './index'
import { worlds } from '../customTypings'

const USER_WORLDS = 'worlds/USER_WORLDS'
const CURRENT_WORLD = 'worlds/CURRENT_WORLD'
const CLEAR_CURRENT_WORLD = 'roads/CLEAR_CURRENT_WORLD'


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

const clearWorld = () => {
    return {
        type: CLEAR_CURRENT_WORLD,
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

export const createNewWorld = (name: string, world_size: number, current_year: number, owner_id: number | undefined)
: ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    if (owner_id) {
        const tick = current_year * 8760
        const response = await csrfFetch('/api/worlds/createNewWorld', {
            method: 'POST',
            body: JSON.stringify({
                name,
                owner_id,
                world_size,
                hour: 0,
                day: 1,
                year: current_year,
                map_seed: null,
                current_tick: tick,
                created_tick: tick,
            })
        })
        const worldId: number = await response.json()
        return worldId
    }
}

export const clearCurrentWorld = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch(clearWorld())
    return true
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
        case CLEAR_CURRENT_WORLD:
            newState = {...state}
            newState.currentWorld = null
            return newState
        default:
            return state
    }
}


export default worldReducer;
