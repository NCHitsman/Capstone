import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { roads } from "../customTypings";
import { csrfFetch } from "./csrf";

const CURRENT_ROADS = 'roads/CURRENT_ROADS'

const currentRoads = (roads: roads) => {
    return {
        type: CURRENT_ROADS,
        payload: roads
    }
}

export const getCurrentRoads = (worldId: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await csrfFetch(`/api/roads/getRoads/${worldId}`)
    const data = await response.json()
    dispatch(currentRoads(data))
    return response
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
        default:
            return state
    }
}

export default roadReducer