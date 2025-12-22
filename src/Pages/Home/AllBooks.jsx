import { useQuery } from "@tanstack/react-query";
import BookCard from "../../Components/BookCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../Error/ErrorPage";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useEffect, useState } from "react";


const AllBooks = () => {
  const axiosSecure = useAxiosSecure()
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortType, setSortType] = useState("");

  const { data: books = [], isLoading, isError } = useQuery({
    queryKey: ['books', "Published"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books`, {
        params: { status: "Published" }
      });
      return res.data
    }
  })

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    let result = [...books];

  
    if (searchText) {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }


    if (sortType === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortType === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortType === "latest") {
      result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    setFilteredBooks(result);
  }, [searchText, sortType, books]);





  if (isLoading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    );
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  return (
    <section className="py-20 bg-[#F4F6F8] dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4">


        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38] dark:text-gray-200">All Books</h2>
          <p className="text-gray-500 mt-2">
            Browse our complete collection of books
          </p>
        </div>
        {/* Search Bar */}
        <div className="my-6 flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Search */}
          <form className="w-full md:w-[450px] relative">
            <label className="input flex items-center gap-3 bg-white shadow-sm px-4 py-3 rounded-full w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>

              <input
                type="search"
                value={searchText}
                placeholder="Search here"
                className="w-full outline-none"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>
          </form>

          {/* Sort */}
          <select
            className="w-full md:w-[220px] px-4 py-3 rounded-full  outline-none bg-white shadow-sm"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="latest">Latest</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllBooks;
