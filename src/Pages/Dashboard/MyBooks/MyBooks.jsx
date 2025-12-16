import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/my-books`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div className="p-6">Loading...</div>;
  // }

  return (
    <div className="p-6">
      <div className="bg-base-100 shadow-xl rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">My Books</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={book._id}>
                  <td>{index + 1}</td>

                  {/* Book Info */}
                  <td className="flex items-center gap-3">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-12 h-16 object-cover rounded-md"
                    />
                    <span className="font-medium">{book.title}</span>
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

                  {/* Edit */}
                  <td>
                    <Link
                      to={`/dashboard/edit-book/${book._id}`}
                      className="btn btn-sm btn-outline btn-primary"
                    >
                      Edit
                    </Link>
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

export default MyBooks;
