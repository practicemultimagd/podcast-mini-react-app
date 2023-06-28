import { useParams } from "react-router-dom";
import { useGetPodcastQuery } from "../../app/services/podcasts";
import { PodcastSideBar } from "../../features/podcast/PodcastSideBar";
import { PodcastEpisodeCounter } from "../../features/podcast/PodcastEpisodeCounter";
import { PodcastEpisodeList } from "../../features/podcast/PodcastEpisodeList";
import { PodcastDetailsSkeleton } from "../../features/podcast/PodcastDetailsSkeleton";
import { useAppDispatch } from "../../app/store";
import { useEffect } from "react";
import { locationLoadingChange } from "../../app/router/locationSlice";

export const PodcastId = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const { data: podcast, isLoading } = useGetPodcastQuery(id ? id : "");

  useEffect(() => {
    dispatch(locationLoadingChange(isLoading));
  }, [isLoading, dispatch]);

  return (<div className="container mx-auto">{isLoading ? (
    <PodcastDetailsSkeleton />
  ) : (
    <div className="grid grid-cols-1 gap-8 pt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
      <div>
        <PodcastSideBar
          data={{
            image: podcast?.image.url,
            title: podcast?.title,
            author: podcast?.itunes.author,
            description: podcast ? podcast.description : "",
          }}
        />
      </div>
      <div className="col-span-3">
        <PodcastEpisodeCounter
          count={podcast?.items ? podcast.items.length : 0}
        />
        <PodcastEpisodeList items={podcast?.items ? podcast.items : []} />
      </div>
    </div>
  )}</div>)
};