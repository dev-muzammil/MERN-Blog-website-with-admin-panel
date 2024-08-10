import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart : (state) => {
        state.currentUser = null
        state.error = null
    },
    signInSuccess : (state, action) => {
        state.currentUser = action.payload
        state.error = null
    },
    signInFailure : (state, action) => {
        state.currentUser = null
        state.error = action.payload
    },
    signOut :(state) => {
      state.currentUser = null
      state.error = null
    }
  },
});

// Action creators are generated for each case reducer function
export const {signInFailure, signInStart, signInSuccess, signOut} = userSlice.actions;

export default userSlice.reducer;
