const MostPopularBooks = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38] dark:text-gray-200">
          Most Popular Books
        </h2>
        <p className="text-gray-500 mt-4">
          The Most Popular Books Today are available in Book Library
        </p>

      
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Featured Book */}
        <div className="lg:col-span-2 border rounded-lg p-6 flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-600 shadow-sm">
          <img
            src="https://img.drz.lazcdn.com/static/bd/p/b78244a8d24f6aac61a1e85f50f45fe7.jpg_720x720q80.jpg"
            alt="Featured Book"
            className="w-full md:w-70 h-100 object-cover border"
          />

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              The Secrets 
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-200 mb-2">
              Rhonda Byrne
            </p>

            {/* Rating */}
            <div className="text-yellow-500 mb-3">
              ★★★★☆
            </div>

            <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-4">
              The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name.
              It is based on the belief of the pseudoscientific law of attraction, which claims that thought
              alone can influence objective circumstances within one's life.
              The book alleges energy as assurance of its effectiveness.
              The book has sold 30 million copies worldwide and has been translated into 50 languages.
              Scientific claims made in the book have been rejected by a range of critics...
            </p>

            <div className="flex items-center justify-between ">
              <span className="text-2xl font-bold text-gray-800 text-primary">
                $245
              </span>
              <button className="text-primary font-semibold hover:underline">
                See More →
              </button>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg",
            "https://prodimage.images-bn.com/pimages/9780062406682_p0_v8_s192x300.jpg",
            "https://storage.googleapis.com/du-prd/books/images/9780593418574.jpg",
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJ2GL2BT4iro/v0/640x-1.jpg",
           
          ].map((img, i) => (
            <div
              key={i}
              className="border rounded-md overflow-hidden hover:shadow-md transition"
            >
              <img
                src={img}
                alt="Book"
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularBooks;