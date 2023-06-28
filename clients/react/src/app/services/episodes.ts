import { EpisodeDetails } from '../../features/episode/EpisodeDetails'
import { api } from './api'

export const episodeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEpisode: build.query<EpisodeDetails, {podcast_id:string, episode_id:string}>({
      query: (args) => `podcasts/${args.podcast_id}/episodes/${args.episode_id}`,
    }),
  }),
})

export const {
  useGetEpisodeQuery,
} = episodeApi