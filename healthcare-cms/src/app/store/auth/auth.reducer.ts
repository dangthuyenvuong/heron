import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "app";
import cache from "app/provider/cache.provider";

type AuthStore = {
    login: boolean,
    user: User | null,
    permission: string[]
}
let initState: AuthStore = {
    login: cache.get('login', false) || false,
    user: cache.get('login', null),
    permission: cache.get<string[]>('permission', [])
}



export const { actions: authAction, name, reducer: authReducer, caseReducers } = createSlice({
    initialState: initState,
    name: 'auth',
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.login = true
            state.user = action.payload
        },
        logout(state) {
            state.login = false
            state.user = null
        }
    },
    extraReducers: {}
})