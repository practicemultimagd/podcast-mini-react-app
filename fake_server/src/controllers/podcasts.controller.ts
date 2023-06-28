import axios from 'axios';
import Parser from 'rss-parser';
type CustomFeed = {foo: string};
type CustomItem = {bar: number};

import {
  adaptGetPodcastsResponse,
  adaptGetPodcastResponse,
} from '../helpers/response.helper';
const parser: Parser<CustomFeed, CustomItem> = new Parser();

export class PodcastController {
  public async getPodcasts(): Promise<any> {
    const response = (
      await axios.get(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      )
    ).data;
    return adaptGetPodcastsResponse(response);
  }

  public async getPodcast(params): Promise<any> {
    const tmp = (
      await axios.get(`https://itunes.apple.com/lookup?id=${params.id}`)
    ).data.results[0];
    const feed = await parser.parseURL(tmp.feedUrl);
    const response = feed;
    return adaptGetPodcastResponse(response);
  }
}
