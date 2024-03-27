import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthenticated: false, 
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
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { setName, setEmail, setPassword, logout,setAuthenticated } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
