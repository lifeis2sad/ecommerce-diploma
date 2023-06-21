import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { buildUrl } from "../../utils/common";
// import { BASE_URL } from "../../utils/constants";

const BASE_URL = "https://fakestoreapi.com";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getCategory: builder.query({
      query: ({ category }) => `/products/category/${category}`,
      providesTags: ["Category"]
    }),
  }),
});

export const { useGetProductQuery, useGetCategoryQuery } = apiSlice;
