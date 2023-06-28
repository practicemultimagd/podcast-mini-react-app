import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { useGetEpisodeQuery } from "../../../app/services/episodes";
import { useEffect } from "react";
import { locationLoadingChange } from "../../../app/router/locationSlice";
import { PodcastSideBar } from "../../../features/podcast/PodcastSideBar";
import { EpisodeDetailsSkeleton } from "../../../features/episode/EpisodeDetailsSkeleton";
import { EpisodeReproductor } from "../../../features/episode/EpisodeReproductor";

export const EpisodeId = () => {
  const dispatch = useAppDispatch();
  const { podcast_id, episode_id } = useParams();
  const { data: episodeDetails, isLoading } = useGetEpisodeQuery({
    podcast_id: podcast_id ? podcast_id : "",
    episode_id: episode_id ? episode_id : "",
  });

  useEffect(() => {
    dispatch(locationLoadingChange(isLoading));
  }, [isLoading, dispatch]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <EpisodeDetailsSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-8 pt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
          <div>
            <PodcastSideBar
              data={{
                image: episodeDetails?.image.url,
                title: episodeDetails?.title,
                author: episodeDetails?.itunes.author,
                description: episodeDetails ? episodeDetails.description : "",
              }}
            />
          </div>
          <div className="col-span-3">
              <EpisodeReproductor epidodeDetails={episodeDetails?.item} />
          </div>
        </div>
      )}
    </div>
  );
};
