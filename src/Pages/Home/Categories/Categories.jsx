import { Link } from "react-router";

const categories = [
  {
    name: "Fiction",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Non-Fiction",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Academic",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Children",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Self-Development",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60",
  },
];

const Categories = () => {
  return (
    <section className="bg-base-100 dark:bg-[#020617] py-20">
      <div className="max-w-11/12 mx-auto px-3 md:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Explore by <span className="text-primary">Category</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base opacity-80">
            Find books across different categories curated for every type of reader.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/all-books?category=${category.name}`}
              className="group relative rounded-xl overflow-hidden 
                         shadow-md hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"               // ✅ BIG PERFORMANCE BOOST
                decoding="async"
                className="h-40 w-full object-cover 
                           group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35 
                              group-hover:bg-black/50 transition"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-sm md:text-base font-semibold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
