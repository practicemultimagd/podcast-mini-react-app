import { Podcast } from '../../features/podcast/Podcast'
import { PodcastDetails } from '../../features/podcast/PodcastDetails'

import { api } from './api'

type PodcastsResponse = Podcast[]

export const podcastApi = api.injectEndpoints({
  endpoints: (build) => ({

    getPodcasts: build.query<PodcastsResponse, void>({
      query: () => ({ url: 'podcasts' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Podcasts', id } as const)),
        { type: 'Podcasts' as const, id: 'LIST' },
      ],
    }),

    getPodcast: build.query<PodcastDetails, string>({
      query: (id) => `podcasts/${id}`,
      providesTags: (_podcast, _err, id) => [{ type: 'PodcastDetails', id }],
    }),

  }),
  
})

export const {
  useGetPodcastsQuery,
  useGetPodcastQuery,
} = podcastApi
