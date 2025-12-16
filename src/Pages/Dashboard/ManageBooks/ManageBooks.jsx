import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/books`)
      .then((res) => setBooks(res.data));
  }, []);

  // 🔁 Publish / Unpublish
  const handleStatusChange = async (id, status) => {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/admin/books/${id}`,
      { status }
    );

    setBooks((prev) =>
      prev.map((book) =>
        book._id === id ? { ...book, status } : book
      )
    );
  };

  // ❌ Delete Book
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this book?",
      text: "All orders of this book will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (!confirm.isConfirmed) return;

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/admin/books/${id}`
    );

    setBooks((prev) =>
      prev.filter((book) => book._id !== id)
    );

    Swal.fire("Deleted!", "Book removed successfully.", "success");
  };

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
              {books.map((book, index) => (
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
                    {book.librarianEmail}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`badge ${book.status === "published"
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
                      checked={book.status === "published"}
                      onChange={(e) =>
                        handleStatusChange(
                          book._id,
                          e.target.checked
                            ? "published"
                            : "unpublished"
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
                      className="btn btn-sm btn-error"
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
