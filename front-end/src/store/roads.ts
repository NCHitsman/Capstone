import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { roads } from "../customTypings";
import { csrfFetch } from "./csrf";

const CURRENT_ROADS = 'roads/CURRENT_ROADS'

const CLEAR_ROADS = 'roads/CLEAR_ROADS'

const currentRoads = (roads: roads) => {
    return {
        type: CURRENT_ROADS,
        payload: roads
    }
}

const clearRoads = () => {
    return {
        type: CLEAR_ROADS,
    }
}

export const getCurrentRoads = (worldId: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await csrfFetch(`/api/roads/getRoads/${worldId}`)
    const data = await response.json()
    dispatch(currentRoads(data))
    return response
}

export const clearCurrentRoads = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    console.log('hello')
    clearRoads()
    return true
}

const roadReducer = (state: {
    currentRoads: roads[] | null
} = {
    currentRoads: null
    },
    action: AnyAction) => {
    let newState;

    switch( action.type ) {
        case CURRENT_ROADS:
            newState = { ...state }
            newState.currentRoads = action.payload
            return newState
        case CLEAR_ROADS:
            newState = {currentRoads: null}
            return newState
        default:
            return state
    }
}

export default roadReducer
