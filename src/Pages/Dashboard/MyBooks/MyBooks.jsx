import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import useAuth from "../../../hook/useAuth";

const MyBooks = () => {
  const axios = useAxios()
  const {user} = useAuth()
  const { data: books = [] } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/my-inventory/${user?.email}`)
      return res?.data
    }
  })
  console.log(books)

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
                <th>Book info</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={book?._id}>
                  {/* Index */}
                  <td>{index + 1}</td>

                  {/* Book Info */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar rounded-sm">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={book?.image}
                            alt={book?.title}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book?.title}</div>
                        <div className="text-sm opacity-50">
                          {book?.author}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td>
                    <span className={`badge 
                  ${book?.status === "Published"
                        ? "badge-success"
                        : "badge-warning"}`}>
                      {book?.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td>
                    <Link
                      
                      to={`/dashboard/edit-book-info/${book._id}`}
                      className="btn btn-ghost btn-xs">
                      Edit Info
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
