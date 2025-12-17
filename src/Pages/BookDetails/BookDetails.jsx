import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router";
import useAxios from "../../hook/useAxios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import BuyNowModal from "../../Components/BuyNowModal/BuyNowModal";

const BookDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const axios = useAxios();
  const [open, setOpen] = useState(false);

  const handleBuyNow = () => {
    setOpen(false)
    
}

  const {
    data: book = { },
    isPending,
    error,
  } = useQuery({
    queryKey: ['book', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`/books/${id}`);
      console.log('API response:', res.data);
      return res?.data;
    },
  });

  if (error) return <p>Error loading book</p>;
  if (isPending) return <LoadingSpinner></LoadingSpinner>
  
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: Image */}
        <div className="bg-[#F1ECE7] p-8 rounded-xl relative flex justify-center">
          <img
            src={book?.image}
            alt={book?.title}
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
            {book?.title}
          </h1>

          <p className="text-2xl font-bold text-primary mb-5">
            ${book?.price}
          </p>

          <p className="text-gray-600 mb-4">
            {book?.description}
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
            <button onClick={()=> setOpen(true)} className="flex items-center gap-2 bg-primary hover:bg-white border border-primary hover:text-black text-white px-8 py-3 rounded-full font-semibold transition">
              <FaShoppingCart />
              Buy Now
            </button>
            <BuyNowModal isOpen={open} onClose={() => setOpen(false)} book={ book} onConfirm={(handleBuyNow)}></BuyNowModal>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Category:</strong>{" "}
              <span className="italic">{book?.category}</span>
            </p>
            <p>
              <strong>Tags:</strong>{" "}
              <span className="italic">
                {book?.tags}
              </span>
            </p>
            {/* <p>
              <strong>Product ID:</strong> {book.productId}
            </p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookDetails;
