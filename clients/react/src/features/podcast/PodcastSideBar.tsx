import { Fragment } from "react";

type Props = {
  data: {
    image: string | undefined;
    title: string | undefined;
    author: string | undefined;
    description: string | TrustedHTML;
  };
  isError?: boolean;
  isLoading?: boolean;
  error?: unknown;
};

export const PodcastSideBar = (props: Props) => {
  return (
    <Fragment>
      <div className="p-3 shadow-lg bg-white">
        <div className="flex justify-center p-10">
          <img src={props.data?.image} width="200px" alt="i" />
        </div>
        <hr />
        <div className="p-3">
          <h2 className="text-2xl">{props.data?.title}</h2>
          <h3 className="text-xl text-gray-700">by {props.data?.author}</h3>
        </div>
        <hr />
        <div className="p-2">
          <span className="font-bold">Description:</span>
          <p dangerouslySetInnerHTML={{ __html: props.data?.description }} />
        </div>
      </div>
    </Fragment>
  );
};
