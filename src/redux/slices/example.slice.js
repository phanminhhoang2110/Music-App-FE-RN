import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        message: "Inital"
    },
    reducers: {
        setExample: (state, action) => {
            
        }
    }
})


export default exampleSlice.reducer