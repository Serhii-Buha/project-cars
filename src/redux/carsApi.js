import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'rental',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648820480e2469c038fd023c.mockapi.io',
  }),
  keepUnusedDataFor: 10000,

  endpoints: builder => ({
    getCars: builder.query({
      query: () => ({
        url: '/adverts',
      }),
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
