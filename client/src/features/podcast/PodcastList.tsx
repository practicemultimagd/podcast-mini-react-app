import { Fragment, Key, useEffect, useState } from "react";
import { Grid } from "../ui/grids/Grid";
import { Card } from "../ui/cards/Card";
import { Podcast } from "./Podcast";
import { selectPodcast } from "./podcastSlice";
import { useAppSelector } from "../../app/hooks";

type Props = {
  data: Podcast[];
  isError?: boolean;
  isLoading?: boolean;
  error?: unknown;
};

export const PodcastList = (props: Props) => {
  const { query } = useAppSelector(selectPodcast);
  const [dataFiltered, setDataFiltered] = useState([] as Podcast[]);

  useEffect(() => {
    setDataFiltered(props.data);
  }, [props.data]);

  useEffect(() => {
    if (query !== "") {
      const filtered = props.data.filter(
        (e) =>
          e.title.toLowerCase().search(query.toLowerCase()) != -1 ||
          e.author.toLowerCase().search(query.toLowerCase()) != -1
      );
      setDataFiltered(filtered);
    } else {
      setDataFiltered(props.data);
    }
  }, [query, props.data]);

  return (
    <Grid loading={props.isLoading}>
      {dataFiltered.map((elem, key: Key | null | undefined) => {
        return (
          <Fragment key={key}>
            <Card
              link={`/podcast/${elem.id}`}
              imgUrl={elem.image.label}
              description={elem.title}
              author={elem.author}
            />
          </Fragment>
        );
      })}
    </Grid>
  );
};
