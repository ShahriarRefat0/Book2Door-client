import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      
      <section className="bg-gradient-to-r from-[#0A2A38] to-[#114B5F] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Book2Door
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            A modern library-to-home book delivery system designed to bring
            knowledge directly to your doorstep.
          </p>
        </div>
      </section>

  
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Book2Door is a digital platform that connects readers with
              nearby libraries. Our system allows users to browse, order, and
              receive books without physically visiting a library.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
              We aim to simplify access to books for students, researchers, and
              book lovers using modern web technologies.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Books"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="p-6 rounded-xl border dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To make reading accessible by reducing physical barriers and
              enabling seamless book delivery through trusted local libraries.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To build a digitally empowered library ecosystem where knowledge
              reaches everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose Book2Door?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Nearby Library Access",
              "Home Delivery",
              "Secure Payments",
              "Real-Time Order Tracking",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Reliable and user-friendly features built for modern readers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Highlights */}
      <section className="bg-[#F4F6F8] dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Designed for Readers & Libraries
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
            Book2Door is built to simplify the book borrowing process by connecting
            readers with nearby libraries and ensuring smooth, reliable home delivery.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Nearby Library Access",
                desc: "Find and request books from libraries closest to your location.",
              },
              {
                title: "Home Delivery",
                desc: "Get books delivered safely to your doorstep without visiting libraries.",
              },
              {
                title: "Easy Book Requests",
                desc: "Request books in just a few clicks with a simple and intuitive process.",
              },
              {
                title: "Order Tracking",
                desc: "Track your book request status from pending to delivered in real-time.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Closing */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Read Smarter. Borrow Faster.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Book2Door is built to support digital learning, research, and a
          strong reading culture through technology.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
