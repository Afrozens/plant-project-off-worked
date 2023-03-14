import { createSlice } from "@reduxjs/toolkit";
import {  userLogin } from "./userActions";

const jwtToken = localStorage.getItem("JWT")
  ? localStorage.getItem("JWT")
  : null;

const initialState = {
  loading: false,
  userInfo: {
    username: "",
    email: "",
    uid: null,
  },
  jwtToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem("JWT");
      state.loading = false;
      state.userInfo = null;
      state.jwtToken = null;
      state.error = null;
      state.success = false;
    },
    userGet: (state, {payload}) => {
      console.log(payload)
      state.loading = false;
      state.userInfo = {
        username: payload.username,
        email: payload.email,
        uid: payload.uid,
      };
      state.success = true;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = {
        username: payload.username,
        email: payload.email,
        uid: payload.uid,
      };
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { userLogout, userGet } = userSlice.actions;
export default userSlice.reducer;