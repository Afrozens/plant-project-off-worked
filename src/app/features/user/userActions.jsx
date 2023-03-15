import { userServices } from "./userServicesConfig";
import {
  signin,
  signup,
  updateUser,
} from "../../../contexts/Auth/AuthServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  userServices.userLogin,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signin(email, password);
      localStorage.setItem("JWT", user.accessToken);

      const info = {
        username: user.displayName,
        email: user.email,
        uid: user.uid,
      };

      return info;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.code);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  userServices.userRegister,
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signup(email, password);
      updateUser(username);

      localStorage.setItem("JWT", user.accessToken);

      const info = {
        username: username,
        email: user.email,
        uid: user.uid,
      };

      return info;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.code);
      }
    }
  }
);
