import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { REHYDRATE } from 'redux-persist'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api/',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })
export const api = createApi({
  reducerPath: 'splitApi',
  keepUnusedDataFor: 60 * 60 * 24,
  baseQuery: baseQueryWithRetry,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Podcasts', 'PodcastDetails', 'EpisodeDetails'],
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})
