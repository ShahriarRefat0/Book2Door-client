import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Error/ErrorPage";

const ManageBooks = () => {
  const axiosSecure = useAxiosSecure()
  const { data: books = [], isLoading, refetch, isError } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-inventory')
      return res.data
    }
  })
  


 
  const handleStatusChange = async (id, status) => {
    await axiosSecure.patch(`/update-status/${id}`, { status })
    refetch()
    Swal.fire({
      title: `Book ${status} Successfully.`,
      icon: "success",
    });
  };


  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this book?",
      text: "All orders of this book will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (!confirm.isConfirmed) return;

    await axiosSecure.delete(`/admin-inventory/book/${id}`)
    refetch()
    Swal.fire("Deleted!", "Book removed successfully.", "success");
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
          Manage Books
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Librarian</th>
                <th>Status</th>
                <th>Publish</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {
                books.map((book, index) => (
                  <tr key={book._id}>
                    <th>{index + 1}</th>

                    {/* Book */}
                    <td className="flex items-center gap-3">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <span className="font-medium">
                        {book.title}
                      </span>
                    </td>

                    {/* Librarian */}
                    <td>
                      {book.librarian?.email}
                      
                    </td>

                    {/* Status */}
                    <td>
                      <span
                        className={`badge badge-soft ${book.status === "Published"
                          ? "badge-success"
                          : "badge-warning"
                          }`}
                      >
                        {book.status}
                      </span>
                    </td>

                    {/* Publish Toggle */}
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-success"
                        checked={book.status === "Published"}
                        onChange={(e) =>
                          handleStatusChange(
                            book._id,
                            e.target.checked
                              ? "Published"
                              : "Unpublished"
                          )
                        }
                      />
                    </td>

                    {/* Delete */}
                    <td>
                      <button
                        onClick={() =>
                          handleDelete(book._id)
                        }
                        className="btn btn-sm hover:bg-white text-white hover:text-gray-900 btn-error"
                      >
                        Delete
                      </button>
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

export default ManageBooks;
