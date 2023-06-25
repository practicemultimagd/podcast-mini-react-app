import { PodcastList } from "../../features/podcast/PodcastList";
import {
  useGetPodcastsQuery,
} from '../../app/services/podcasts'

import { Counter } from "../../features/ui/badges/Counter";
import { PodcastSearcher } from "../../features/podcast/PodcastSearcher";
import { Podcast } from "../../features/podcast/Podcast";
import { useAppDispatch } from "../../app/store";
import { locationLoadingChange } from "../../app/router/locationSlice";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useAppDispatch()

  const { data: podcasts, isError, isLoading, error } = useGetPodcastsQuery();

  useEffect(() => {
    dispatch(locationLoadingChange(isLoading));
  }, [isLoading, dispatch]);

  return (
    <div className="container m-auto pb-20">
      <div className="flex justify-end pt-2">
        <Counter num={podcasts ? (podcasts as Podcast[]).length : 0} />
        <PodcastSearcher />
      </div>
      <PodcastList 
        data={podcasts ? (podcasts as Podcast[]) : []} 
        isError={isError}
        isLoading={isLoading}
        error={error}
        />
    </div>
  );
};


