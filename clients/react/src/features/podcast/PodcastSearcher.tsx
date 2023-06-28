import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { updateQuery } from "./podcastSlice";

export const PodcastSearcher = () => {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(updateQuery(query));
  }, [query, dispatch]);

  return (
    <input
      className="rounded-md px-2 border-2"
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Filter podcasts..."
    />
  );
};
