import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Vulputate Cursus",
    date: "Feb 08, 2025",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    description:
      "This article explores how structured reading programs and curated book collections help students build strong academic foundations and lifelong learning habits.",
  },
  {
    id: 2,
    title: "Summer Entertaining",
    date: "Feb 08, 2025",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    description:
      "Discover engaging books, light reads, and creative activities perfect for summer, helping readers stay inspired and productive during their free time.",
  },
  {
    id: 3,
    title: "Library Essentials",
    date: "Mar 12, 2025",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    description:
      "A guide to essential resources every modern library should offer, including digital access, research tools, and home book delivery services.",
  },
  {
    id: 4,
    title: "Healthy Reading Habits",
    date: "Apr 05, 2025",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    description:
      "Learn how developing consistent reading habits can improve focus, reduce stress, and enhance personal growth in everyday life.",
  },
];


const Blogs = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          <p className="text-gray-500 mt-2">
            Read our latest articles and library insights
          </p>
        </motion.div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 bg-white dark:bg-gray-800 "
            >
              
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-1000"
                />
              </div>

       
              <div className="p-5">
                <h3 className="text-lg  text-gray-800 dark:text-gray-200 font-semibold mb-2">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-2 text-primary text-sm mb-3">
                  <FaRegCalendarAlt />
                  <span>{blog.date}</span>
                </div>

                <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-5">
                  {blog.description}
                </p>

                <button className="border border-gray-300 px-5 py-2 text-sm hover:bg-primary dark:text-gray-200 hover:text-white transition">
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
