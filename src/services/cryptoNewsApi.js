import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//change
const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "4d06bf1bc4msh87415416de6f1fep1ff302jsn1172022dd763",
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
