type Props = {
  count: number;
  isError?: boolean;
  isLoading?: boolean;
  error?: unknown;
};

export const PodcastEpisodeCounter = (props: Props) => {
  return (
  <div className="p-3 shadow-lg bg-white">
    Episodes: {props.count}
  </div>);
};
