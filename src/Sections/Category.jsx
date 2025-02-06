import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdAgriculture,
  MdBrush,
  MdPrecisionManufacturing,
  MdHome,
  MdFastfood,
} from "react-icons/md";

const Category = () => {
  const categories = [
    {
      icon: <MdAgriculture className="text-[#A86F18] text-6xl" />,
      title: "Agricultural Products",
      description:
        "Grains, spices, and processed foods. Organic and specialty agricultural items.",
    },
    // {
    //   icon: <MdBrush className="text-[#A86F18] text-6xl" />,
    //   title: "Handicrafts and Artisanal Products",
    //   description:
    //     "Handmade jewelry, pottery, and wooden items. Cultural and traditional art pieces.",
    // },
    // {
    //   icon: <MdPrecisionManufacturing className="text-[#A86F18] text-6xl" />,
    //   title: "Industrial and Engineering Goods",
    //   description:
    //     "Machinery, tools, and equipment. Automobile parts and industrial components.",
    // },
    // {
    //   icon: <MdHome className="text-[#A86F18] text-6xl" />,
    //   title: "Consumer Goods",
    //   description:
    //     "Household items, cosmetics, and personal care products. Toys, stationery, and lifestyle products.",
    // },
    {
      icon: <MdFastfood className="text-[#A86F18] text-6xl" />,
      title: "Food and Beverages",
      description: "Packaged and processed foods. Non-alcoholic beverages.",
    },
  ];

  // Reference to track visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation once when 30% is visible

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Animate to visible and original position
  };

  return (
    <div id="category" className="bg-[#F3EFDF] py-20 px-6 lg:px-20 w-full">
      <div className="container mx-auto text-center" ref={ref}>
        {/* Section Title */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-[#1F282A] mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Browse Through Our{" "}
          <span className="text-[#A86F18]">Extensive Export</span> Range
        </motion.h2>

        <motion.h2
          className="text-[#1F282A] mb-10  text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore our diverse range of high-quality products, tailored to meet
          global demands.
        </motion.h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex items-center cursor-pointer  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon on the left */}
              <div className="flex-shrink-0 mr-4 text-3xl">{category.icon}</div>
              {/* Title and Description on the right */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
