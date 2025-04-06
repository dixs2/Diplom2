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
  photo: string;
  isClosed: boolean;
  description: string;
  myAfrica: DataCountry[];
  myAsia: DataCountry[];
  myAustralia: DataCountry[];
  myEurope: DataCountry[];
  myNorthAmerica: DataCountry[];
  mySouthAmerica: DataCountry[];
}

export interface getUserByEmail {
  email: string;
}

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], any>({
      query: () => ({
        url: "/users",
        params: {
          isClosed: false,
        },
      }),
    }),
    getUser: builder.query<User[], string>({
      query: () => ({
        url: "/users",
        params: {
          email: `${StorageService.getItem("email")}`,
          password: `${StorageService.getItem("password")}`,
        },
      }),
    }),
    getUserByEmail: builder.query<User[], getUserByEmail>({
      query: (params) => ({
        url: "/users",
        params: {
          email: params.email,
        },
      }),
    }),
    getUserByName: builder.query<User[], string>({
      query: (name) => ({
        url: "/users",
        params: {
          name: name,
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
    changeUser: builder.mutation<User, User>({
      query: (body) => {
        return {
          url: `/users/${body.id}`,
          method: "PUT",
          body: { ...body },
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            debugger;
            location.reload();
          }
        } catch (error) {
          console.error("Ошибка при обновлении данных:", error);
        }
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetUserByEmailQuery,
  useGetUserByNameQuery,
  useCreateUserMutation,
  useChangeUserMutation,
} = usersApi;
