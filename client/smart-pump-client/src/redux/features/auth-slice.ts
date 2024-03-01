import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { z } from "zod";
import { UpdateUserInformationSchema } from "@/schemas";

interface CurrentState {
  isAuthorized: boolean;
  user: z.infer<typeof UpdateUserInformationSchema> | null;
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
    modifyUserInformation: (
      state,
      action: PayloadAction<z.infer<typeof UpdateUserInformationSchema>>
    ) => {
      return { ...state, user: action.payload };
    },
    resetAuth: () => {
      return initialState;
    },
  },
});

export const { setAuth, modifyUserInformation, resetAuth } = auth.actions;

export default auth.reducer;
