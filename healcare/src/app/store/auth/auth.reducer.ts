import { createSlice } from "@reduxjs/toolkit";
import cache from "app/provider/cache.provider";

type AuthStore = {
    login: boolean,
    user: Object | null
}
let initState: AuthStore = {
    login: cache.get('login', false) || false,
    user: cache.get('user', null)
}

export const { actions: authAction, name, reducer: authReducer, caseReducers } = createSlice({
    initialState: initState,
    name: 'auth',
    reducers: {
        login(state, action) {
            console.log('aaaaaaaaaaaaa')
            state.login = true
            state.user = action.payload
        }
    },
    extraReducers: {}
})

