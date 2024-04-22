import { jsonSettings } from "./../types/jsonSettings";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getJsonSettings } from "../selectors/jsonSettings";
import { getUserByIdQuery, setJsonSettingsMutation } from "../api/userApi";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { User } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/initAuthData",
  async (newJsonSettings, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue("error");
    }

    try {
      const response = await dispatch(getUserByIdQuery(userId)).unwrap();
      
      if (!response) {
        return rejectWithValue("error");
      }

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
