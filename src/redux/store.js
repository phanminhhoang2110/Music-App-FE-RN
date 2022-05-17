import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/example.slice";
import loginSlice from "./slices/login.slice";


export const store = configureStore({
    reducer: {
        example: exampleSlice,
        login: loginSlice
    }
})