import useAuth from "../../hook/useAuth";
import { RxCross2 } from "react-icons/rx";
import useAxios from "../../hook/useAxios";



const BuyNowModal = ({ isOpen, onClose, book, onConfirm }) => {
  const { user } = useAuth();
  const axios = useAxios();



  if (!isOpen) return null;

  const handlePayment = async () => {
  
    const paymentInfo = {
      bookId: book?._id,
      name: book?.title,
      category: book?.category,
      price: book?.price,
      description: book?.description,
      image: book?.image,
      quantity: 1,
      customer: {
      name: user?.displayName,
        email: user?.email,
        image: user?.photoURL
      }
    }

    const { data} = await axios.post(`/create-checkout-session`, paymentInfo)
    window.location.href= data.url
}


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Confirm Purchase
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Book Info */}
        <div className="flex gap-4 mb-4">
          {/* <img
            src={book?.image}
            alt={book?.title}
            className="w-20 h-28 object-cover rounded"
          /> */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white">
              {book?.title}
            </h4>
            <p className="text-sm text-gray-500">{book?.author}</p>
            <p className="text-gray-500">Customer: { user?.displayName}</p>
            <p className="mt-2 font-bold text-primary">
              ${book?.price}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="btn btn-primary text-white"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
