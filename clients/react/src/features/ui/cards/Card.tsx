import { Link } from "react-router-dom";

type Props = {
  link: string;
  imgUrl: string;
  description: string;
  author: string;
};

export const Card = ({ link, imgUrl, description, author }: Props) => (
  <div className="pt-20">
    <Link to={link}>
      <div className="rounded-lg bg-white shadow-sm px-5 pt-5 pb-10 text-gray-800 cursor-pointer hover:shadow-xl transition-shadow transition-transform hover:scale-105">
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-36 h-36 -mt-16 mx-auto shadow-lg">
            <img className="w-full" src={imgUrl} alt="" />
          </div>
        </div>
        <div className="w-full mb-10">
          <p className="uppercase font-bold text-gray-600 text-center">
            {description}
          </p>
          <p className="text-gray-600 text-center">{author}</p>
        </div>
      </div>
    </Link>
  </div>
);
