import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//change
const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "d975c03306msh5d5f9e99d13ee87p148b36jsn19614d6f208b",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
//change
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
//change
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
// onnly the header change
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
