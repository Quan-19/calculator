import {createAction, props} from "@ngrx/store";

export const increase = createAction('[Clock] Increase',props<{time:Date}>());

