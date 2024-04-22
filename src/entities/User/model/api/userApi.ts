import { rtkApi } from "@/shared/api/rtkApi";
import { jsonSettings } from "../types/jsonSettings";
import { User } from "../types/user";

interface setJsonSettingsArg {
  userId: string;
  jsonSettings: jsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, setJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: {
          jsonSettings: jsonSettings,
        },
      }),
    }),
    getUserById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
export const getUserByIdQuery = userApi.endpoints.getUserById.initiate;
