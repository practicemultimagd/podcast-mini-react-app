export const GridSkeleton = () => (
  <div className="container px-6 py-10 mx-auto animate-pulse">
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>{" "}
      <p className="ml-2">fetching podcasts...</p>
    </div>
    <div className="grid grid-cols-1 gap-8 pt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,].map((e) => (
        <div key={e} className="w-full ">
          <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
        </div>
      ))}
    </div>
  </div>
);
