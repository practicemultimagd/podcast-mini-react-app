import { Link } from "react-router-dom";
import { Episode } from "../episode/Episode";
import moment from 'moment';


type Props = {
  items: Episode[];
  isError?: boolean;
  isLoading?: boolean;
  error?: unknown;
};

export const PodcastEpisodeList = (props: Props) => {
  return (
    <div className="my-5 bg-white shadow-lg">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.items.map((e, key) => (
                    <tr
                      key={key}
                      className={`border-b ${
                        key % 2 != 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link className="text-blue-500 hover:text-blue-800" to={`episode/${e.guid}`}>{e.title}</Link>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {(moment(e.isoDate)).format('DD/MM/YYYY')}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {e.itunes.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
