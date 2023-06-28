import { Episode } from "./Episode";

export type PodcastDetails = {
  items: Episode[]
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
    duration:string;
  };
}
