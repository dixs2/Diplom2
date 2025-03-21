import { DataCountry } from "../../components/CardCountry/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import StorageService from "../../shared/service";
import { NewUser } from "../../pages/Registration/RegistrationForm";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  description: string;
  myAfrica: DataCountry[];
  myAsia: DataCountry[];
  myAustralia: DataCountry[];
  myEurope: DataCountry[];
  myNorthAmerica: DataCountry[];
  mySouthAmerica: DataCountry[];
}

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<User[], string>({
      query: () => ({
        url: "/users",
        params: {
          email: `${StorageService.getItem("email")}`,
          password: `${StorageService.getItem("password")}`,
        },
      }),
    }),
    createUser: builder.mutation<User, NewUser>({
      query: (body) => {
        return {
          url: "/users",
          method: "POST",
          body: { ...body },
        };
      },
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } = usersApi;
