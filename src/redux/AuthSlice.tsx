import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AuthService,
  UserRegisterParamsInterface,
} from "../services/AuthService";

const user = JSON.parse(localStorage.getItem("user") as any);

interface AuthState {
  loading: "idle" | "pending" | "failed" | "success";
  isLoggedIn: boolean;
  user: any;
}

const initialState: AuthState = user
  ? { isLoggedIn: true, user, loading: "idle" }
  : { isLoggedIn: false, user: null, loading: "idle" };

export const authRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      fullName,
      email,
      phone,
      password,
      confirmPassword,
    }: UserRegisterParamsInterface,
    thunkAPI,
  ) => {
    // thunkAPI.dispatch()
    try {
      const response = await AuthService.register({
        fullName,
        email,
        phone,
        password,
        confirmPassword,
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(new Error());
    }
  },
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authRegister.pending, (state, _action) => {
      // state.isLoggedIn = action.payload
      state.loading = "pending";
    });

    builder.addCase(authRegister.fulfilled, (state, _action) => {
      state.loading = 'success'
    })
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
