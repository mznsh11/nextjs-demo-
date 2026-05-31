export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      {/* Title Header Skeleton */}
      <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded w-48 mb-8" />
      
      {/* Search Bar Skeleton */}
      <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 w-full" />
      
      {/* Genre Filter Pill Capsules Skeleton */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full"
          />
        ))}
      </div>

      {/* Grid of 6 Book Card Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden h-[450px]"
          >
            {/* Book Cover Box */}
            <div className="h-80 bg-zinc-200 dark:bg-zinc-800 w-full" />
            
            {/* Card Content Text Lines */}
            <div className="p-6 space-y-3">
              <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full w-20" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}