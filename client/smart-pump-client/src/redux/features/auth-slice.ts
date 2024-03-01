import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

import { User } from "@/interfaces";

interface CurrentState {
  isAuthorized: boolean;
  user: User | null;
}

const initialState: CurrentState = {
  isAuthorized: false,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (_, action: PayloadAction<CurrentState>) => {
      return action.payload;
    },
    resetAuth: () => {
      return initialState;
    },
  },
});

export const { resetAuth, setAuth } = auth.actions;

export default auth.reducer;
