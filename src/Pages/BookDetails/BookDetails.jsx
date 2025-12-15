import { useState } from "react";
import { FaSearchPlus, FaShoppingCart } from "react-icons/fa";

const BookDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const book = {
    title: "Where They Sing",
    price: 58,
    description:
      "The best selling novel of all times about love and friendship. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    longDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    category: "How to & Guides",
    tags: ["fiction", "life", "novel"],
    productId: 1678,
    image:
      "https://i.ibb.co/6F3h5nH/book-cover.png", // replace with real image
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: Image */}
        <div className="bg-[#F1ECE7] p-8 rounded-xl relative flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="max-h-[420px] object-contain"
          />

          {/* Zoom Icon */}
          <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">
            <FaSearchPlus />
          </button>
        </div>

        {/* RIGHT: Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#0A2A38] mb-3">
            {book.title}
          </h1>

          <p className="text-2xl font-bold text-primary mb-5">
            ${book.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-4">
            {book.description}
          </p>

          <p className="text-gray-600 mb-8">
            {book.longDescription}
          </p>

          {/* Quantity + Buy */}
          <div className="flex items-center gap-6 mb-8">
            {/* Quantity */}
            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-4 py-2 text-lg"
              >
                −
              </button>
              <span className="px-6 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>

            {/* Buy Button */}
            <button className="flex items-center gap-2 bg-primary hover:bg-white border border-primary hover:text-black text-white px-8 py-3 rounded-full font-semibold transition">
              <FaShoppingCart />
              Buy Now
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Category:</strong>{" "}
              <span className="italic">{book.category}</span>
            </p>
            <p>
              <strong>Tags:</strong>{" "}
              <span className="italic">
                {book.tags.join(", ")}
              </span>
            </p>
            <p>
              <strong>Product ID:</strong> {book.productId}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookDetails;
