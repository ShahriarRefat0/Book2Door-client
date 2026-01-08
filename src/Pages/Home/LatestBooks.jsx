import { Link } from "react-router";
import BookCard from "../../Components/BookCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";

const LatestBooks = () => {
const axiosSecure = useAxiosSecure()
  const { data: latestBooks = [] } = useQuery({
    queryKey: ["latestBooks", "Published"],
    queryFn: async () => {
      const res = await axiosSecure.get('/latest-books', {
          params: {
          status: "Published",
        }}
      )
      return res.data
    }
  })

  //console.log(latestBooks)

  return (
    <section className="py-16 bg-[#F4F6F8] dark:bg-gray-700 ">
      <div className="max-w-11/12 mx-auto md:px-6 px-2">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0A2A38] dark:text-gray-200">
            Latest <span className="text-primary">Books</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Discover the newest arrivals handpicked for book lovers
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/all-books" className="btn btn-primary hover:bg-white hover:text-black px-8">
            View All Books
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestBooks;
