import { createSlice } from "@reduxjs/toolkit";
import Cache from '../../provider/cache.provider'

type AuthStore = {
    login: boolean,
    user: Object | null
}
let initState: AuthStore = {
    login: Cache.get('login', false),
    user: Cache.get('user', null)
}

export const { actions: authAction, name, reducer: authReducer, caseReducers } = createSlice({
    initialState: initState,
    name: 'auth',
    reducers: {
        login(state, action) {
            state.login = true
            state.user = action.payload
        }
    },
    extraReducers: {}
})
