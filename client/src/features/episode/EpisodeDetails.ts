import { Episode } from "../episode/Episode";

export type EpisodeDetails = {
  item: Episode
  image: {
    link: string;
    url: string;
    title: string;
  };
  title: string;
  description: string;
  itunes: {
    image: string;
    categories: string;
    author: string;
    subtitle:string;
    summary: string;
  };
}
