import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/user/userSlice"
import messageReducer from "./features/message/messageSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer
    }
})

export default store 