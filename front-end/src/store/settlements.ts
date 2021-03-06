import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { settlement, settlements } from "../customTypings";
import { csrfFetch } from "./csrf";

// const CREATE_SETTLEMENTS = 'settlements/CREATE_SETTLEMENTS'
const CURRENT_SETTLEMENTS = 'settlements/CURRENT_SETTLEMENTS'
const CLEAR_SETTLEMENTS = 'settlements/CLEAR_SETTLEMENTS'


const currentSettlement = (settlements: settlement[]) => {
    return {
        type: CURRENT_SETTLEMENTS,
        payload: settlements
    }
}

const clearSettlements = () => {
    return {
        type: CLEAR_SETTLEMENTS,
    }
}

export const getCurrentSettlements = (worldId: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await csrfFetch(`/api/settlements/getSettlements/${worldId}`)
    const data = await response.json()
    dispatch(currentSettlement(data))
    return response
}

export const createNewSettlement = (name: string, world_id: number, world_size: number, type: number, created_tick: number, x_cordinate: number, y_cordinate: number)
: ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    let population;
    let wealthPerPerson;
    switch (type) { // ToDo Tune numbers for accuracy
        case 1:
            population = Math.abs(Math.floor(Math.random() * 10000))
            wealthPerPerson = +parseFloat((Math.random() * (500 - 250) + 250).toString()).toFixed(2)
            break
        case 2:
            population = Math.abs(Math.floor(Math.random() * ((100000 - 10000) + 10000)))
            wealthPerPerson = +parseFloat((Math.random() * (1000 - 5000) + 500).toString()).toFixed(2)
            break
        case 3:
            population = Math.abs(Math.floor(Math.random() * ((300000 - 100000) + 100000)))
            wealthPerPerson = +parseFloat((Math.random() * (2000 - 750) + 750).toString()).toFixed(2)
            break
        default:
            population = Math.abs(Math.floor(Math.random() * ((1000000 - 300000) + 300000)))
            wealthPerPerson = +parseFloat((Math.random() * (3500 - 1000) + 1000).toString()).toFixed(2)
    }
    const wealth = Math.abs(+(population * wealthPerPerson * (Math.random() * (1 - 0.5) + 0.5)).toFixed(2))
    await csrfFetch('/api/settlements/createNewSettlement', {
        method: 'POST',
        body: JSON.stringify({
            name,
            world_id,
            x_cordinate,
            y_cordinate,
            type,
            population,
            wealth,
            state: '[IDLE]',
            created_tick: created_tick * 8760
        })
    })
}

export const clearCurrentSettlements = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch(clearSettlements())
    return true
}



const settlementReducer = (state: settlements = {}, action: AnyAction) => {
    let newState: settlements = {};

    switch( action.type ) {
        case CURRENT_SETTLEMENTS:
            newState = { ...state }
            action.payload.forEach((settlement: settlement) => {
                newState[settlement.id] = settlement
            })
            return newState
        case CLEAR_SETTLEMENTS:
            newState = {}
            return newState
        default:
            return state
    }
}

export default settlementReducer
