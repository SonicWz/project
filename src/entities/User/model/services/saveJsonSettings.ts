import { jsonSettings } from './../types/jsonSettings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';

export const saveJsonSettings = createAsyncThunk<
    jsonSettings,
    jsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('error');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('error');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
