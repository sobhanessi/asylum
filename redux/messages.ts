import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    message: "",
  },
  reducers: {
    numberOfMessages: (state, action) => {
      // number of received messages
      // here I also must reduce numbers regarding reading the messages.
    },
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
