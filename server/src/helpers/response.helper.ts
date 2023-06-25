import { Podcast } from '../../types/Podcast';
import { PodcastDetails } from '../../types/PodcastDetails';
import { EpisodeDetails } from '../../types/EpisodeDetails';

import { Episode } from '../../types/Episode';

export const adaptGetPodcastsResponse = (response): Podcast[] => {
  const adaptGetPodcastsResponse: Podcast[] = [];
  response.feed.entry.forEach((element) => {
    adaptGetPodcastsResponse.push({
      name: element['im:name'].label,
      image: {
        label: element['im:image'][2].label,
        attributes: {
          height: element['im:image'][2].attributes.height,
        },
      },
      summary: element.summary.label,
      title: element.title.label,
      author: element['im:artist'].label,
      id: element.id.attributes['im:id'],
    } as Podcast);
  });

  return adaptGetPodcastsResponse;
};

export const adaptGetPodcastResponse = (response): PodcastDetails => {
  const adaptGetPodcastResponse = {
    items: [],
    image: {
      link: response.image?.link,
      url: response.image?.url,
      title: response.image?.title,
    },
    title: response.title,
    description: response.description,
    isoDate: response.isoDate,
    itunes: {
      image: response.itunes?.image,
      categories: response.itunes?.categories,
      author: response.itunes?.author,
      subtitle: response.itunes?.subtitle,
      summary: response.itunes?.summary,
      duration: response.itunes?.duration,
    },
  } as PodcastDetails;

  response.items.map((e) => {
    adaptGetPodcastResponse.items.push({
      title: e.title,
      enclosure: {
        url: e.enclosure?.url,
        length: e.enclosure?.length,
        type: e.enclosure?.type,
      },
      guid: e.guid,
      isoDate: e.isoDate,
      content: e['content:encoded'],
      itunes: {
        author: e.itunes?.author,
        subtitle: e.itunes?.subtitle,
        summary: e.itunes?.summary,
        duration: e.itunes?.duration,
        image: e.itunes?.image,
        episode: e.itunes?.episode,
        season: e.itunes?.season,
        episodeType: e.itunes?.episodeType,
      },
    } as Episode);
  });

  return adaptGetPodcastResponse;
};

export const adaptGetEpisodeResponse = (response): EpisodeDetails => {
  const adaptGetPodcastResponse = {
    item: ({
      title: response.items[0]?.title,
      enclosure: {
        url: response.items[0].enclosure?.url,
        length: response.items[0].enclosure?.length,
        type: response.items[0].enclosure?.type,
      },
      guid: response.items[0].guid,
      isoDate: response.items[0].isoDate,
      content: response.items[0]['content:encoded'],
      itunes: {
        author: response.items[0].itunes?.author,
        subtitle: response.items[0].itunes?.subtitle,
        summary: response.items[0].itunes?.summary,
        duration: response.items[0].itunes?.duration,
        image: response.items[0].itunes?.image,
        episode: response.items[0].itunes?.episode,
        season: response.items[0].itunes?.season,
        episodeType: response.items[0].itunes?.episodeType,
      },
    } as Episode),
    image: {
      link: response.image?.link,
      url: response.image?.url,
      title: response.image?.title,
    },
    title: response.title,
    description: response.description,
    isoDate: response.isoDate,
    itunes: {
      image: response.itunes?.image,
      categories: response.itunes?.categories,
      author: response.itunes?.author,
      subtitle: response.itunes?.subtitle,
      summary: response.itunes?.summary,
      duration: response.itunes?.duration,
    },
  } as EpisodeDetails;



  return adaptGetPodcastResponse;
};
