import React from "react";
import { FaBook, FaTruck, FaUsers, FaGlobeAsia } from "react-icons/fa";

const AboutUs = () => {
  return (
    
      <div className="bg-base-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About Book2Door
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
              Delivering knowledge to your doorstep — fast, reliable, and nationwide.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>Book2Door</strong> is an online book delivery platform designed
              to connect libraries, bookstores, and readers across Bangladesh.
              Our mission is to make books easily accessible to everyone,
              regardless of location.
            </p>
            <p className="leading-relaxed">
              We work with librarians and publishers to ensure quality books,
              transparent pricing, and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl shadow bg-white dark:bg-[#1e293b]">
              <FaBook className="text-3xl text-primary mb-2" />
              <h4 className="font-semibold">Quality Books</h4>
            </div>
            <div className="p-6 rounded-xl shadow bg-white dark:bg-[#1e293b]">
              <FaTruck className="text-3xl text-primary mb-2" />
              <h4 className="font-semibold">Fast Delivery</h4>
            </div>
            <div className="p-6 rounded-xl shadow bg-white dark:bg-[#1e293b]">
              <FaUsers className="text-3xl text-primary mb-2" />
              <h4 className="font-semibold">Trusted Partners</h4>
            </div>
            <div className="p-6 rounded-xl shadow bg-white dark:bg-[#1e293b]">
              <FaGlobeAsia className="text-3xl text-primary mb-2" />
              <h4 className="font-semibold">Nationwide Coverage</h4>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 dark:bg-[#020617] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              Why Choose Book2Door?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Reliable Service",
                  desc: "We ensure every order is tracked and delivered on time.",
                },
                {
                  title: "Secure Payments",
                  desc: "Safe and transparent payment system for all users.",
                },
                {
                  title: "Role-Based Dashboards",
                  desc: "Separate dashboards for users, librarians, and admins.",
                },
                {
                  title: "Customer First",
                  desc: "Support-focused approach for readers and partners.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow hover:shadow-lg transition"
                >
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="leading-relaxed">
              To become Bangladesh’s most trusted online book delivery platform,
              empowering education and lifelong learning.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="leading-relaxed">
              To connect readers with books effortlessly through technology,
              logistics, and partnerships with libraries nationwide.
            </p>
          </div>
        </section>
      </div>

    

  );
};

export default AboutUs;
