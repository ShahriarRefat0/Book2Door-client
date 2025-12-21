import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Error/ErrorPage";
import useAxiosSecure from "../../../hook/useAxiosSecure";


const LibrarianOrders = () => {
  const axiosSecure = useAxiosSecure()
const {user}  = useAuth()

  const { data: orders = [], isError, isLoading, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-orders/${user?.email}`)
      return res.data
    }
  })

  // console.log(orders)

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

  //  Update Status
  const handleStatusChange = async (id, newStatus) => {
    try {
      
      await axiosSecure.patch(`/orders/update-status/${id}`,
        { status: newStatus }
      );
      refetch();
      Swal.fire("Status Changed!", `Order ${newStatus} successfully.`);

    } catch (err) {
       Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message || "Something went wrong!",
            });
    }

    
    
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

        <h2 className="text-2xl font-bold mb-6">
          Book Orders
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>User</th>
                <th>Order Status</th>
                <th>Change Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>

                  <td className="">
                    <h4 className="font-semibold">Name:{order?.name}</h4>
                    <p className="text-gray-500">Author: {order?.author}</p>

                  </td>

                  <td className="">
                    <h4 className="font-semibold">{order?.customer?.email}</h4>
                    <p className="text-gray-500">{order?.customer?.name}</p>
                  </td>

                  {/* Current Status */}
                  <td>
                    <span
                      className={`badge badge-soft ${order.orderStatus === "pending"
                          ? "badge-warning"
                          : order.orderStatus === "shipped"
                            ? "badge-info"
                            : order.orderStatus === "delivered"
                              ? "badge-success"
                              : "badge-error"
                        }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    {order.orderStatus !== "cancelled" &&
                      order.orderStatus !== "delivered" && (
                        <select
                          className="select select-sm select-bordered"
                        value={order.orderStatus}
                          onChange={(e) =>
                            handleStatusChange(
                              order._id,
                              e.target.value
                            )
                          }
                        >
                        {order.orderStatus === "pending" && (
                            <option value="pending">
                              Pending
                            </option>
                          )}
                        {(order.orderStatus === "pending" ||
                          order.orderStatus === "shipped") && (
                              <option value="shipped">
                                Shipped
                              </option>
                            )}
                        {order.orderStatus === "shipped" && (
                            <option value="delivered">
                              Delivered
                            </option>
                          )}
                        </select>
                      )}
                  </td>

                  {/* Cancel */}
                  <td>
                    {order.orderStatus === "pending" && (
                      <button
                        onClick={() =>
                          handleCancel(order._id)
                        }
                        className="btn btn-sm text-white hover:bg-white hover:text-gray-900 btn-error"
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

export default LibrarianOrders;
