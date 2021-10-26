import { authReducer } from "./auth";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    auth: authReducer,
})

export type RootState = ReturnType<typeof reducers>


