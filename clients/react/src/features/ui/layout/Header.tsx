import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectLocation } from "../../../app/router/locationSlice";

export const Header = ({ link = "", title = "" }) => {
  const {isLoading} = useAppSelector(selectLocation);

  return (
    <div className="border-b-2 border-gray-200">
    <div className="p-4 flex justify-between align-center container mx-auto">
      <span className="text-indigo-700 font-bold text-xl">
        <Link to={link}>{title}</Link>
      </span>

      {isLoading ? (
        <span className="relative flex h-3 w-3 mt-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      ) : null}
    </div>
    </div>

  );
};
