import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  apiUrl: "http://localhost:5000",
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setApiUrl: (state, action) => {
      state.apiUrl = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout, setToken, setApiUrl } = slice.actions;

export default slice.reducer;
