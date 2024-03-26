import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthenticated: false, //added
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    //added
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.isAuthenticated = false; // Only reset authentication status
    },
  },
});

export const { setName, setEmail, setPassword, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
