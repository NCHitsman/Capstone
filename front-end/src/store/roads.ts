import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { road, roads } from "../customTypings";
import { csrfFetch } from "./csrf";

const CURRENT_ROADS = 'roads/CURRENT_ROADS'

const CLEAR_ROADS = 'roads/CLEAR_ROADS'

const currentRoads = (roads: road[]) => {
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
    const data: road[] = await response.json()
    dispatch(currentRoads(data))
    return response
}

export const clearCurrentRoads = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch(clearRoads())
    return true
}

const roadReducer = (state: roads = {}, action: AnyAction) => {
    let newState: roads = {}

    switch( action.type ) {
        case CURRENT_ROADS:
            newState = {}
            action.payload.forEach((road: road) => {
                newState[road.id] = road
            })
            return newState
        case CLEAR_ROADS:
        return {}
        default:
            return state
    }
}

export default roadReducer
