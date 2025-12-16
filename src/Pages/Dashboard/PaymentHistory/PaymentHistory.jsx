import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="p-6">Loading payment history...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load payment history
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-base-100 rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Payment History ({payments.length})
        </h2>

        {payments.length === 0 ? (
          <p className="text-gray-500">
            No payments found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Book Name</th>
                  <th>Amount</th>
                  <th>Paid Date</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>

                    <td className="font-medium">
                      {payment.bookTitle || "N/A"}
                    </td>

                    <td className="text-green-600 font-semibold">
                      ${payment.amount}
                    </td>

                    <td>
                      {new Date(payment.paidAt).toLocaleDateString()}
                    </td>

                    <td className="text-xs break-all">
                      {payment.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
