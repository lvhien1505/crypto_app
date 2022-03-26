import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c61c00a992mshf87a6f69e353398p12af2fjsn105d89171f52',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ({ count, offset }) =>
                createRequest(`/coins?limit=${count}&offset=${offset}`),
        }),

        searchCrypto: builder.mutation({
            query: (query) =>
                createRequest(`/search-suggestions?query=${query}`),
        }),
    }),
});

export const { useGetCryptosQuery, useSearchCryptoMutation } = cryptoApi;
