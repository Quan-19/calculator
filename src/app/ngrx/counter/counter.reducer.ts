import {CounterState} from "./counter.state";
import {createAction, createReducer, on} from "@ngrx/store";
import * as CountActions from './counter.actions';
import {state} from "@angular/animations";

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(initialState,
  on(CountActions.increase, state => {
    return {
      count: state.count + 1
    }
  }),
  on(CountActions.decrease, state => {
    return {
      count: state.count - 1
    }
  }),
  on(CountActions.reset, state => {
    return {
      count: 0
    }
  }),
on(CountActions.update, (state,{value}) => {
  return {
    count: value
  }
}),
)


