import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";

export const worldMapApi = createApi({
  reducerPath: "worldMap",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: (country: string) => ({
        url: `/${country}`,
      }),
    }),
    getCountryByTitle: builder.query({
      query: ({ title, continent }) => ({
        url: `/${continent}`,
        params: {
          title: title,
        },
      }),
    }),
  }),
});

export const { useGetCountryQuery, useGetCountryByTitleQuery } = worldMapApi;
