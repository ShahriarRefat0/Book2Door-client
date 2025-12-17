import { useQuery } from "@tanstack/react-query";
import BookCard from "../../Components/BookCard";
import useAxios from "../../hook/useAxios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";


const AllBooks = () => {
const axios = useAxios()
  const { data: books =[ ], isLoading, isError } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get('/books');
      return res.data
    }
  })
  


  if (isLoading) {
    return (
    <LoadingSpinner></LoadingSpinner>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load books
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#F4F6F8] dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38] dark:text-gray-200">All Books</h2>
          <p className="text-gray-500 mt-2">
            Browse our complete collection of books
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
           <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllBooks;
