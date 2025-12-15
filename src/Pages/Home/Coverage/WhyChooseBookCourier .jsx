import { FaTruckFast, FaBookOpen, FaBangladeshiTakaSign, FaMapLocationDot, FaShieldHalved, FaHeart } from "react-icons/fa6";

const WhyChooseBookCourier = () => {
  const features = [
    {
      icon: <FaTruckFast />,
      title: "Fast & Reliable Delivery",
      desc: "Get your favorite books delivered quickly and safely to your doorstep.",
    },
    {
      icon: <FaBookOpen />,
      title: "Wide Collection of Books",
      desc: "From academic to fiction — explore a diverse range of books in one place.",
    },
    {
      icon: <FaBangladeshiTakaSign />,
      title: "Affordable Prices",
      desc: "Best prices with exciting offers — because books should be accessible to everyone.",
    },
    {
      icon: <FaMapLocationDot />,
      title: "Nationwide Coverage",
      desc: "We deliver books to almost all districts across Bangladesh.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure & Easy Ordering",
      desc: "Simple ordering process with secure payment and order tracking.",
    },
    {
      icon: <FaHeart />,
      title: "Made for Book Lovers",
      desc: "A platform built by book lovers, for book lovers.",
    },
  ];

  return (
    <section className="bg-[#F4F6F8] py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38]">
            Why Choose BookCourier?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We make buying and delivering books simple, fast, and reliable - all over Bangladesh.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0A2A38] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseBookCourier;
