import { notificationReducer } from './notification';
import { settingReducer } from './setting';
import { authReducer } from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	notification: notificationReducer,
	setting: settingReducer,
	auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
