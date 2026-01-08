import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-base-100 dark:bg-[#020617] text-gray-800 dark:text-gray-200">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-80">
            We’d love to hear from you. Whether you have a question, feedback,
            or need help with an order — Book2Door is here.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto mt-10 px-4 pb-20 grid lg:grid-cols-2 gap-12">

        {/* LEFT – INFO */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Contact Information
          </h2>
          <p className="opacity-80 max-w-md">
            Reach out to us anytime. Our support team is always ready to help you
            find the right books and ensure smooth delivery.
          </p>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Office Location</h4>
                <p className="text-sm opacity-80">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <FaPhoneAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm opacity-80">+880 1XXX-XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
              <FaEnvelope className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm opacity-80">support@book2door.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0f172a] shadow-xl border border-gray-200 dark:border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            Send us a message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full bg-transparent"
              required
            />

            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full bg-transparent"
              required
            />

            <textarea
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full bg-transparent"
              required
            />

            <button className="btn btn-primary w-full text-white">
              Send Message
            </button>
          </form>

          <p className="text-xs text-center opacity-60 mt-4">
            We usually respond within 24 hours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Delivering Books Across Bangladesh
          </h2>
          <p className="max-w-2xl mx-auto text-sm opacity-80">
            Book2Door partners with libraries nationwide to bring books directly
            to your doorstep — fast, reliable, and secure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
