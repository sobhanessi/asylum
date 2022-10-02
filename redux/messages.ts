import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    message: "",
  },
  reducers: {
    receive: (state, action) => {
      // state.message = action.payload.message;
    },
    send: (state, action) => {
      // idk
    },
  },
});

export const { receive, send } = messages.actions;

export default messages.reducer;
