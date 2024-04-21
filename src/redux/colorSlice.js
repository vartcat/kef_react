import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name : 'color',
    initialState : {
        value : 'rgb(29,29,29)'
    },
    reducers : {
        randomColor : (state) => {
            let randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            state.value = randomColor
        }
    }
})

export const { randomColor } = colorSlice.actions

export default colorSlice.reducer