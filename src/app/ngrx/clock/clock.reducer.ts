import {createAction, createReducer, on} from "@ngrx/store";
import {ClockState} from "./clock.state";
import * as ClockActions from './clock.actions';

export const initialState: ClockState = {
  time: new Date().toLocaleTimeString()
}

export const clockReducer = createReducer(initialState,
  on(ClockActions.increase, (state,action) => {
    console.log(action.time)
    return {
      ...state,
      time: new Date(action.time).toLocaleTimeString()
    }
  }),

)


