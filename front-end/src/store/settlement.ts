import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { settlements } from "../customTypings";
import { csrfFetch } from "./csrf";

// const CREATE_SETTLEMENTS = 'settlements/CREATE_SETTLEMENTS'
const CURRENT_SETTLEMENTS = 'settlements/CURRENT_SETTLEMENTS'

const currentSettlement = (settlements: settlements[]) => {
    return {
        type: CURRENT_SETTLEMENTS,
        payload: settlements
    }
}

export const getCurrentSettlements = (worldId: string): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const response = await csrfFetch(`/api/settlements/getSettlements/${worldId}`)
    const data = await response.json()
    dispatch(currentSettlement(data))
    return response
}

export const createNewSettlement = (name: string, world_id: number, world_size: number, type: number, created_tick: number)
: ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    const x_cordinate = Math.floor(Math.random() > .5 ? Math.random() * world_size / 2 : Math.random() * -world_size / 2)
    const y_cordinate = Math.floor(Math.random() > .5 ? Math.random() * world_size / 2 : Math.random() * -world_size / 2)
    let population;
    let wealthPerPerson;
    switch (type) { // ToDo Tune numbers for accuracy
        case 1:
            population = Math.abs(Math.floor(Math.random() * 10000))
            console.log('1')
            wealthPerPerson = +parseFloat((Math.random() * (500 - 250) + 250).toString()).toFixed(2)
            break
        case 2:
            population = Math.abs(Math.floor(Math.random() * ((100000 - 10000) + 10000)))
            console.log('2')
            wealthPerPerson = +parseFloat((Math.random() * (1000 - 5000) + 500).toString()).toFixed(2)
            break
        case 3:
            population = Math.abs(Math.floor(Math.random() * ((300000 - 100000) + 100000)))
            console.log('3')
            wealthPerPerson = +parseFloat((Math.random() * (2000 - 750) + 750).toString()).toFixed(2)
            break
        default:
            population = Math.abs(Math.floor(Math.random() * ((1000000 - 300000) + 300000)))
            wealthPerPerson = +parseFloat((Math.random() * (3500 - 1000) + 1000).toString()).toFixed(2)
    }
    const wealth = (population * wealthPerPerson).toFixed(2);
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



const settlementReducer = (state: {
    currentSettlements: settlements[] | null
} = {
        currentSettlements: null
        },
    action: AnyAction) => {
    let newState;

    switch( action.type ) {
        case CURRENT_SETTLEMENTS:
            newState = { ...state }
            newState.currentSettlements = action.payload
            return newState
        default:
            return state
    }
}

export default settlementReducer
