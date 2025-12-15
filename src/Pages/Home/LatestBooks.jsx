import { Link } from "react-router";
import BookCard from "../../Components/BookCard";

const LatestBooks = () => {
  // Dummy data (later API থেকে replace করতে পারবে)
  const latestBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 420,
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 380,
      image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 4,
      title: "Deep Work",
      author: "Cal Newport",
      price: 410,
      image: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38]">
            Latest Books
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
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
          <Link to="/books" className="btn btn-primary hover:bg-white hover:text-black px-8">
            View All Books
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestBooks;
