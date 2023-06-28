export type Podcast = {
  name: string;
  image: {
    label: string;
    attributes: {
      height: string;
    };
  };
  summary: string,
  title: string;
  author: string;
  id: string;
}