import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
        username: ''
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username
            isLogin = true
        }
    }
})

export const {login} = loginSlice.actions

export default loginSlice.reducer

