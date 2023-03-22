import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    autoHideDuration: null,
    message: "",
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        showMessage: (state, { payload }) => {
            state.open = true
            state.autoHideDuration = 5000
            state.message = payload 
        },
        hiddenMessage: (state) => {
            state.open = false
            state.autoHideDuration = null
            state.message = ""
        }
    }
})

export const { showMessage, hiddenMessage } = messageSlice.actions;
export default messageSlice.reducer;
