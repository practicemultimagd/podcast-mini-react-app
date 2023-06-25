import CustomAudio from "../ui/audio/CustomAudio";
import { Episode } from "./Episode";

type Props = {
  epidodeDetails: Episode | undefined;
  isError?: boolean;
  isLoading?: boolean;
  error?: unknown;
};

export const EpisodeReproductor = (props: Props) => {
  return (
    <div className="my-5 bg-white shadow-lg p-5">
      <h2 className="pb-4 text-2xl font-bold">{props.epidodeDetails?.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: props.epidodeDetails?.content as string | TrustedHTML,
        }}
      />
      <CustomAudio
        track={{
            src: props.epidodeDetails?.enclosure.url,
            name: props.epidodeDetails?.title,
          }}
      />
    </div>
  );
};
