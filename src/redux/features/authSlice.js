import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let data = {
  isAuthenticated: false,
  role: "",
  name: "",
  email: "",
};

const cookie = Cookies.get("userInfo");
if (cookie) {
  data = JSON.parse(cookie);
}

const initialState = {
  isAuthenticated: data.isAuthenticated,
  role: data.role,
  name: data.name,
  email: data.email,
  isVerified: data.isVerified,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
