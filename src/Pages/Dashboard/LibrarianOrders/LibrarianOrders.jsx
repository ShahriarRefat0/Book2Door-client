import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LibrarianOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/librarian/orders`)
      .then((res) => setOrders(res.data));
  }, []);

  // ❌ Cancel Order
  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Cancel this order?",
      text: "This order will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel",
    });

    if (!result.isConfirmed) return;

    await axios.patch(
      `${import.meta.env.VITE_API_URL}/orders/${id}/cancel`
    );

    setOrders((prev) =>
      prev.map((order) =>
        order._id === id
          ? { ...order, status: "cancelled" }
          : order
      )
    );

    Swal.fire("Cancelled!", "Order has been cancelled.", "success");
  };

  // 🔁 Update Status
  const handleStatusChange = async (id, newStatus) => {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/orders/${id}/status`,
      { status: newStatus }
    );

    setOrders((prev) =>
      prev.map((order) =>
        order._id === id
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

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
                <th>Status</th>
                <th>Change Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>

                  <td className="font-medium">
                    {order.bookTitle}
                  </td>

                  <td>
                    {order.userEmail}
                  </td>

                  {/* Current Status */}
                  <td>
                    <span
                      className={`badge ${order.status === "pending"
                          ? "badge-warning"
                          : order.status === "shipped"
                            ? "badge-info"
                            : order.status === "delivered"
                              ? "badge-success"
                              : "badge-error"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    {order.status !== "cancelled" &&
                      order.status !== "delivered" && (
                        <select
                          className="select select-sm select-bordered"
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(
                              order._id,
                              e.target.value
                            )
                          }
                        >
                          {order.status === "pending" && (
                            <option value="pending">
                              Pending
                            </option>
                          )}
                          {(order.status === "pending" ||
                            order.status === "shipped") && (
                              <option value="shipped">
                                Shipped
                              </option>
                            )}
                          {order.status === "shipped" && (
                            <option value="delivered">
                              Delivered
                            </option>
                          )}
                        </select>
                      )}
                  </td>

                  {/* Cancel */}
                  <td>
                    {order.status === "pending" && (
                      <button
                        onClick={() =>
                          handleCancel(order._id)
                        }
                        className="btn btn-sm btn-error"
                      >
                        Cancel
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
