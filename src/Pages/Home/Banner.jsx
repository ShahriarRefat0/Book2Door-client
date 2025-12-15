import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1651472652019-8ec9e660d315",
    title: "Discover Your Favorite Book",
    desc: "Explore thousands of books from various categories and authors — all in one place.",
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "Read, Learn & Grow",
    desc: "From fiction to non-fiction, find books that inspire and educate you.",
  },
  {
    img: "https://images.unsplash.com/photo-1758644713545-2d37d5f30308",
    title: "Books Delivered to Your Door",
    desc: "Order books easily and get them delivered quickly with Book2Door.",
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="relative h-[250px] sm:h-[350px] md:h-[550px] lg:h-[650px]"
        >
          {/* Image */}
          <img
            src={slide.img}
            className="h-full w-full object-cover"
            alt={slide.title}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="max-w-3xl px-6 text-white space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90">
                {slide.desc}
              </p>
              <Link
                to="/books"
                className=" btn  btn-primary btn-sm md:btn-lg mt-2"
              >
                View All Books
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
