import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaTruck, FaCity } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Books Available",
    value: 12000,
    icon: <FaBookOpen />,
  },
  {
    id: 2,
    title: "Happy Readers",
    value: 8500,
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "Books Delivered",
    value: 23000,
    icon: <FaTruck />,
  },
  {
    id: 4,
    title: "Cities Covered",
    value: 64,
    icon: <FaCity />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Statistics = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-base-100 to-gray-100 dark:from-[#020617] dark:to-[#020617]">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Book2Door in Numbers
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base opacity-80">
            Trusted by thousands of readers and libraries across Bangladesh.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              className="p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur
                         border border-gray-200 dark:border-white/10
                         shadow hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-4 text-3xl text-primary">
                {stat.icon}
              </div>

              <AnimatedNumber value={stat.value} />

              <p className="mt-2 text-sm opacity-80">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
