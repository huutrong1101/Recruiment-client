import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../services/AuthService";
import { toast } from "react-toastify";
import {
  UserLoginParamsInterface,
  UserRegisterParamsInterface,
} from "../services/services";
import { UserService } from "../services/UserService";

const _storedToken = localStorage.getItem("token");
const token: string | null = _storedToken ? JSON.parse(_storedToken) : null;

interface AuthState {
  isLoggedIn: boolean;
  user?: any | null;
  token: string | null;
}

const initialState: AuthState = { isLoggedIn: true, token };

export const authRegister = createAsyncThunk(
  "Auth/register",
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

      if (response.status !== 200) {
        throw new Error(
          `There are some error when register: ${response.statusText}`,
        );
      }

      const { result: token, message } = response.data;
      thunkAPI.dispatch(setToken(token));
      // Fetch the user from token
      thunkAPI.dispatch(fetchUserFromToken({ token }));

      localStorage.setItem("token", JSON.stringify(token));
      console.debug(`Set localStorage#token with value ${token}`);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(new Error());
    }
  },
);

export const authLogin = createAsyncThunk(
  "Auth/login",
  async ({ credentialId, password }: UserLoginParamsInterface, thunkAPI) => {
    try {
      const response = await AuthService.login({ credentialId, password });

      if (response.status !== 200) {
        throw new Error(
          `There are some error when register: ${response.statusText}`,
        );
      }

      const { result } = response.data;
      const { accessToken, refreshToken } = result;
      // Set the token onto localStorage
      localStorage.setItem("token", JSON.stringify(accessToken));
      thunkAPI.dispatch(setToken(token));
      // Fetch the user from token
      thunkAPI.dispatch(fetchUserFromToken({ token: result.accessToken }));
      console.debug(`Set localStorage#token with value ${accessToken}`);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(new Error());
    }
  },
);

export const fetchUserFromToken = createAsyncThunk(
  "Auth/fetch-user-from-token",
  async ({ token }: { token: string }, thunkAPI) => {
    try {
      // Get the profile
      const profileResponse = await UserService.getUserFromToken(token);
      if (profileResponse.status !== 200) {
        alert(`error`);
        throw new Error(`Error when using authorize token ${token}`);
      }

      thunkAPI.dispatch(setUser(profileResponse.data.result));
      return profileResponse.data.result;
    } catch (err: any) {
      const { data, status } = err.response;

      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const authLogout = createAsyncThunk("Auth/logout", (_, thunkAPI) => {
  thunkAPI.dispatch(setUser(null));
  thunkAPI.dispatch(setToken(null));
  thunkAPI.dispatch(setUserLoggedIn(false));

  localStorage.removeItem("token");
});

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserFromToken.pending, (state, _action) => {
      state.user = null;
      state.isLoggedIn = false;
    });

    builder.addCase(fetchUserFromToken.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export const { setUserLoggedIn, setUser, setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
