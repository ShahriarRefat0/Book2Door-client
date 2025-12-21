import { Link } from "react-router";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import ErrorPage from "../../Error/ErrorPage";

const MyOrder = () => {
const {user} = useAuth()
const axiosSecure = useAxiosSecure()
  const { data: orders = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders`);
      return res.data
    }
  })

  // console.log("all  order", orders)




  const handlePayment = async (order) => {
  //  console.log(order)

    const paymentInfo = {
      orderId: order?._id,
      bookId: order?.bookId,
      name: order?.name,
      category: order?.category,
      price: order?.price,
      description: order?.description,
      image: order?.image,
          quantity: 1,
          customer: {
          name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
          }
        }

    const { data } = await axiosSecure.post(`/create-checkout-session`, paymentInfo)

    window.location.assign(data.url)
  }


  //  Cancel Order
  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Cancel this order?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    });

    if (!confirm.isConfirmed) return;

    await axiosSecure.patch(`/orders/cancel/${id}`);

    refetch();

    Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
  };


  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  return (
    <div className="p-6">
      <div className="bg-base-100 rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">My Orders</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>

                  <td className="font-medium">
                    {order?.name}
                  </td>

                  <td>
                    {new Date(order?.createdAt).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={`badge badge-soft ${order.orderStatus === "pending"
                        ? "badge-warning"
                        : order.orderStatus === "cancelled"
                          ? "badge-error" : "badge-success"  
                          
                        }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge badge-soft ${order.paymentStatus === "unpaid"
                        ? "badge-warning" :  "badge-success" 
                        }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>

                  <td className="space-x-2">

                    {/* Pay Now Button */}
                    {order.orderStatus === "pending" && order.paymentStatus === "unpaid" && (
                      <button
                        onClick={() => handlePayment(order)}
                        className="btn btn-sm btn-primary text-white hover:text-gray-800 hover:bg-white"
                      >
                        Pay Now
                      </button>
                    )}

                    {/* Cancel / Cancelled Button */}
                    {order.orderStatus === "pending" && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="btn btn-sm btn-error hover:bg-white text-white hover:text-gray-800"
                      >
                        Cancel
                      </button>
                    )}

                    {order.orderStatus === "cancelled" && (
                      <button
                        disabled
                        className="btn btn-sm btn-outline btn-error opacity-60 cursor-not-allowed"
                      >
                        Cancelled
                      </button>
                    )}

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
