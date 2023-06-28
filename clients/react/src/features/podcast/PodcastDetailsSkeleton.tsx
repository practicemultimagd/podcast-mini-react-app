export const PodcastDetailsSkeleton = () => (
  <div className="py-10 mx-auto animate-pulse">
    <div className="px-10 text-center">
        Loading podcast details...
    </div>
    <div className="grid grid-cols-1 gap-8 pt-4 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4 px-10">
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
      <div className="col-span-3">
        <div className="w-full h-16 bg-gray-300 rounded-lg mb-5"></div>
        <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  </div>
);
