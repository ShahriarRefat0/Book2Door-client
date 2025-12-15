import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { id, title, author, price, image } = book;

  return (
    <div className=" bg-white hover:shadow-md transition border border-gray-200">
      {/* Book Image */}
      <div className="h-[300px]  overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">

      {/* Book Info */}
      <h3 className="text-lg font-semibold text-[#0A2A38] line-clamp-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        {author}
      </p>

      {/* Price + Action */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-bold text-primary">
          ৳ {price}
        </span>

        <Link
          to={`/book-details/${id}`}
          className="btn btn-sm btn-outline "
        >
          View
        </Link>
      </div>
      </div>
    </div>
  );
};

export default BookCard;
