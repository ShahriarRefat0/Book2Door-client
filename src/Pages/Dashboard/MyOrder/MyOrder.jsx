import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/my-orders`)
      .then(res => setOrders(res.data));
  }, []);

  // ❌ Cancel Order
  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Cancel this order?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    });

    if (!confirm.isConfirmed) return;

    await axios.patch(`${import.meta.env.VITE_API_URL}/orders/cancel/${id}`);

    setOrders(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status: "cancelled" } : order
      )
    );

    Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
  };

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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>

                  <td className="font-medium">
                    {order.bookTitle}
                  </td>

                  <td>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      className={`badge ${order.status === "pending"
                          ? "badge-warning"
                          : order.status === "cancelled"
                            ? "badge-error"
                            : "badge-success"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="space-x-2">
                    {/* ✅ Cancel Button */}
                    {order.status === "pending" && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="btn btn-sm btn-error"
                      >
                        Cancel
                      </button>
                    )}

                    {/* 💳 Pay Now Button */}
                    {order.status === "pending" &&
                      order.paymentStatus === "unpaid" && (
                        <Link
                          to={`/dashboard/payment/${order._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Pay Now
                        </Link>
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
