import { createSlice } from "@reduxjs/toolkit"


type AuthState = {
    user: null,
}

type AuthAction = {
    
}



export const { actions, reducer, name, caseReducers } = createSlice<AuthState, AuthAction>({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        login(state: AuthState, action: any){
            
        }
    },
    extraReducers(builder){
        builder.addCase('', (state) => {
            
        })
    }
})

