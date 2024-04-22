import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { UserSchema, User } from "../types/user";
import { setFeaturesFlags } from "@/shared/lib/features";
import { jsonSettings } from "../types/jsonSettings";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { initAuthData } from "../services/initAuthData";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeaturesFlags(action.payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<jsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      }
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        setFeaturesFlags(action.payload.features);
        state._inited = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
