import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./userActions";

const jwtToken = localStorage.getItem("JWT")
  ? localStorage.getItem("JWT")
  : null;

const initialState = {
  loading: false,
  userInfo: {
    username: "",
    email: "",
    uid: null,
    photoURL: ""
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
    userGet: (state, { payload }) => {
      state.loading = false;
      state.userInfo = {
        username: payload.username,
        email: payload.email,
        uid: payload.uid,
        photoURL: payload.photoURL
      };
      state.success = true;
    },
    userUpdate: (state, {payload}) => {
      state.loading = false;
      state.userInfo = {
        username: payload.username,
        photoURL: payload.photoURL
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = {
          username: payload.username,
          email: payload.email,
          uid: payload.uid,
        };
        state.error = null;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = {
          username: payload.username,
          email: payload.email,
          uid: payload.uid,
        };
        state.error = null;
        state.success = true;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { userLogout, userGet, userUpdate } = userSlice.actions;
export default userSlice.reducer;
