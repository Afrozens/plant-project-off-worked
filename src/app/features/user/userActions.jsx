import { userServices } from "./userServices";
import { signin } from "../../../contexts/Auth/AuthServices";
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
/* 
export const userGetDetails = createAsyncThunk(
  userServices.userGet,
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const currentUser = unSubscribe();
      if (currentUser) {
        const { accessToken, uid, email, displayName } = currentUser;
        if (user.jwtToken === accessToken) {
          const info = {
            username: displayName,
            email,
            uid,
          };
          console.log(info);
          return info;
        }
      }
    } catch (error) {
      if (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
 */