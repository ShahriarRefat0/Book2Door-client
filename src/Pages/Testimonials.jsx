import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arafat Hossain",
    role: "University Student",
    message:
      "Book2Door has completely changed how I buy books. Fast delivery and great collection!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Nusrat Jahan",
    role: "School Teacher",
    message:
      "I love how easy it is to order academic books. The service is reliable and smooth.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rakib Hasan",
    role: "Freelancer",
    message:
      "Clean UI, smooth experience, and books delivered right on time. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#020617] py-24">
      <div className="max-w-11/12 px-3 md:px-6 mx-auto ">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            What Our Readers Say
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base opacity-80">
            Trusted by readers across Bangladesh for quality books and fast delivery.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-2xl bg-white dark:bg-[#0f172a]
                         border border-gray-200 dark:border-white/10
                         shadow hover:shadow-lg transition"
            >
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                “{t.message}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-xs opacity-70">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
