import { combineReducers, Action } from "redux";
import sessionReducer from './session';
import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {logger} from 'redux-logger'
import { ThunkDispatch } from "redux-thunk";
import worldReducer from "./worlds";
import settlementReducer from "./settlement";

const rootReducer = combineReducers({
  session: sessionReducer,
  worlds: worldReducer,
  settlements: settlementReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R


export default configureStore;
