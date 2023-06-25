export type Episode = {
  title: string;
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
  guid:string;
  isoDate:string;
  content:string;
  itunes: {
    author: string;
    subtitle: string;
    summary: string;
    duration: string;
    image: string;
    episode: string;
    season: string;
    episodeType: string;
  };
}
