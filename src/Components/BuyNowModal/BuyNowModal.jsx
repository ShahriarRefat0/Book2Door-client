import useAuth from "../../hook/useAuth";
import { RxCross2 } from "react-icons/rx";
import useAxios from "../../hook/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";



const BuyNowModal = ({ isOpen, onClose, book, onConfirm }) => {
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  if (!isOpen) return null;

//   const handlePayment = async () => {
  
//     const paymentInfo = {
//       bookId: book?._id,
//       name: book?.title,
//       category: book?.category,
//       price: book?.price,
//       description: book?.description,
//       image: book?.image,
//       quantity: 1,
//       customer: {
//       name: user?.displayName,
//         email: user?.email,
//         image: user?.photoURL
//       }
//     }

//     const { data} = await axios.post(`/create-checkout-session`, paymentInfo)
//     window.location.href= data.url
// }

  const handleConfirm = async (data ) => {
    // console.log(data)
    try {const orderData = {
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
      },
      librarian: book?.librarian,
      address: data.address,
      phoneNumber: data.phoneNumber,
      paymentStatus: "Unpaid",
      orderStatus: 'pending',
      createdAt: new Date(),
    }

    axios.post('/orders', orderData)
 Swal.fire({
        icon: "success",
   title: "Order place Successfully.",
   text: "Please Pay"
      });

      reset();
      onClose();
      navigate('/dashboard/my-order')
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed to place order",
        text: err.message,
      });
    }
  }
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Place Your Order
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Book Info */}
        <div className="mb-5 p-4 flex justify-between rounded-lg bg-gray-50 dark:bg-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-white">
            {book?.title}
          </h4>
          <h2 className="font-bold text-primary">${ book?.price}</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleConfirm)}>
        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className="input input-bordered w-full"
              placeholder="01XXXXXXXXX"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="label">
              <span className="label-text">Delivery Address</span>
            </label>
            <textarea
              rows="3"
              {...register("address", {
                required: "Address is required",
              })}
              className="textarea textarea-bordered w-full"
              placeholder="Enter your full delivery address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
              type="submit"
             
            className="btn btn-primary"
          >
            Confirm
          </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default BuyNowModal;
