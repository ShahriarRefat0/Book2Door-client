import { motion } from "framer-motion";
import { FaMagic,  FaBookOpen } from "react-icons/fa";
import { FcLibrary } from "react-icons/fc";
import { IoLibrarySharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";

const brands = [
  { name: "Magic Publisher", icon: <FaMagic /> },
  { name: "Reader Choice", icon: <IoLibrarySharp /> },
  { name: "Public Library", icon: <FaBookOpen /> },
  { name: "Book House", icon: <FcLibrary /> },
  { name: "Readers Club", icon: <FaBookReader /> },
];


const marqueeBrands = [...brands, ...brands];

const Brands = () => {
  return (
    <section className="py-14 bg-[#F4F6F8] dark:bg-gray-700 overflow-hidden">
      <div className="max-w-11/12 mx-auto md:px-6 px-2">

       
        <h2 className="text-2xl md:text-4xl font-bold text-[#0A2A38] dark:text-gray-200 mb-8 text-center">
          Top <span className="text-primary">Publisher</span>
        </h2>

   
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <div
                key={index}
                className="min-w-[220px] h-24 flex items-center justify-center gap-3 border border-gray-200 bg-white dark:bg-gray-800 rounded-md shadow-sm"
              >
                <span className="text-3xl">
                  {brand.icon}
                </span>
                <span className="font-semibold uppercase text-gray-700 dark:text-gray-200">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
