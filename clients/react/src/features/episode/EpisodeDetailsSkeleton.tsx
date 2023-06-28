export const EpisodeDetailsSkeleton = () => (
  <div className="py-10 mx-auto animate-pulse">
    <div className="px-10 text-center">
        Loading episode details...
    </div>
    <div className="grid grid-cols-1 gap-8 pt-4 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4 px-10">
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
      <div className="col-span-3">
        <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  </div>
);
