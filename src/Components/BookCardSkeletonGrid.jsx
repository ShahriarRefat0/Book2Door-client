import BookCardSkeleton from "./BookCardSkeleton";

const BookCardSkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[...Array(count)].map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BookCardSkeletonGrid;
