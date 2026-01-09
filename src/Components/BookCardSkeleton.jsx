const BookCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 rounded-md overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-75 bg-gray-300 dark:bg-gray-700" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />

        <div className="flex justify-between items-center mt-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20" />
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16" />
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
