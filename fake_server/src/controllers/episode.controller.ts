import axios from 'axios';
import Parser from 'rss-parser';
type CustomFeed = {foo: string};
type CustomItem = {bar: number};

import {
  adaptGetEpisodeResponse,
} from '../helpers/response.helper';

const parser: Parser<CustomFeed, CustomItem> = new Parser();

export class EpisodeController {
  public async getEpisode(params): Promise<any> {
    const tmp = (
      await axios.get(`https://itunes.apple.com/lookup?id=${params.podcast_id}`)
    ).data.results[0];
    const feed = await parser.parseURL(tmp.feedUrl);
    const response = feed;
    const item = response.items.filter(item => item.guid == params.episode_id);
    response.items = item;
    return adaptGetEpisodeResponse(response);
  }
}
