import { useQuery } from "@tanstack/react-query";
import BookCard from "../../Components/BookCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../Error/ErrorPage";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCardSkeletonGrid from "../../Components/BookCardSkeletonGrid";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



const AllBooks = () => {
  // Use public axios for unauthenticated access
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const limit = 12;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", "Published", currentPage, category],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`, {
        params: {
          status: "Published",
          page: currentPage,
          limit,
          category,
        },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  const books = data?.books || [];
  const total = data?.total || 0;
  const totalPage = Math.ceil(total / limit);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  // useEffect(() => {
  //   let result = [...books];


  //   if (searchText) {
  //     result = result.filter((book) =>
  //       book.title.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //   }


  //   if (sortType === "priceLow") {
  //     result.sort((a, b) => a.price - b.price);
  //   }

  //   if (sortType === "priceHigh") {
  //     result.sort((a, b) => b.price - a.price);
  //   }

  //   if (sortType === "latest") {
  //     result.sort(
  //       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //     );
  //   }

  //   setFilteredBooks(result);
  // }, [searchText, sortType, books]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);


  useEffect(() => {
    let result = [...books];

    if (searchText) {
      result = result.filter(book =>
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
  }, [books, searchText, sortType]);






  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  return (
    <section className="py-20 bg-[#F4F6F8] dark:bg-gray-700">
      <div className="max-w-11/12 mx-auto px-2 md:px-6">


        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38] dark:text-gray-200">All Books</h2>
          <p className="text-gray-500 mt-2">
            Browse our complete collection of books
          </p>
        </div>
        {/* Search Bar */}
        <div className="my-6 flex flex-col md:flex-row gap-4 items-center justify-between">

          <div className="relative w-full md:w-[220px]">
            {/* Filter Icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {/* Funnel / Filter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
                />
              </svg>
            </span>

            {/* Select */}
            <select
              className="w-full pl-10 pr-4 py-2 rounded-full outline-none
               bg-white dark:bg-[#1D232A] shadow-sm
               appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Academic">Academic</option>
              <option value="Children">Children</option>
              <option value="Self-Development">Self-Development</option>
              <option value="Technology">Technology</option>
            </select>

            {/* Dropdown Arrow */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>


          {/* Search */}
          <form className="w-full md:w-[450px] relative">
            <label className="input flex items-center gap-3   shadow-sm px-4 py-3 rounded-full w-full">
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
          <div className="relative w-full md:w-[220px]">
            {/* Icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {/* Sort Icon (Heroicons style SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M6 12h12M10 18h4"
                />
              </svg>
            </span>

            {/* Select */}
            <select
              className="w-full pl-10 pr-4 py-2 rounded-full outline-none
               bg-white dark:bg-[#1D232A] shadow-sm
               appearance-none cursor-pointer"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>

            {/* Dropdown Arrow */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>




        </div>


        {isLoading ? (
          <BookCardSkeletonGrid count={limit} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map(book => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}

      </div>

      <div className="flex justify-center flex-wrap gap-2 py-12">

        <button
          className="btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          <MdKeyboardArrowLeft /> Prev
        </button>

        {[...Array(totalPage).keys()].map(i => (
          <button
            key={i}
            className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline"
              }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-sm"
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next <MdKeyboardArrowRight />
        </button>

      </div>


    </section>
  );
};

export default AllBooks;
