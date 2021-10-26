import { createSlice } from "@reduxjs/toolkit";

type SettingStore = {

}
let initState: SettingStore = {}

export const { actions: settingAction, name, reducer: settingReducer } = createSlice({
    initialState: initState,
    name: 'setting',
    reducers: {},
    extraReducers: {}
})