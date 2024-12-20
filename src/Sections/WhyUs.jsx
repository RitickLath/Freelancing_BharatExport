import React, { useRef } from "react";
import {
  MdVerified,
  MdCategory,
  MdTimer,
  MdPublic,
  MdPeopleAlt,
  MdEco,
} from "react-icons/md";
import { motion, useInView } from "framer-motion";

const WhyUs = () => {
  const points = [
    {
      icon: <MdVerified className="text-[#A86F18] text-4xl" />,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous checks to meet international standards.",
    },
    {
      icon: <MdCategory className="text-[#A86F18] text-4xl" />,
      title: "Diverse Product Range",
      description:
        "From machinery to spices, we offer a wide variety of Indian goods.",
    },
    {
      icon: <MdTimer className="text-[#A86F18] text-4xl" />,
      title: "Timely Delivery",
      description:
        "Our logistics expertise ensures your orders reach you on time.",
    },
    {
      icon: <MdPublic className="text-[#A86F18] text-4xl" />,
      title: "Global Expertise",
      description:
        "With years of experience, we understand the complexities of international trade.",
    },
    {
      icon: <MdPeopleAlt className="text-[#A86F18] text-4xl" />,
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our top priority, with tailored solutions to meet your unique needs.",
    },
    {
      icon: <MdEco className="text-[#A86F18] text-4xl" />,
      title: "Sustainability",
      description:
        "We promote eco-friendly practices and sustainable sourcing to protect the environment.",
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
    <div className="bg-[#1F282A] py-10 px-6 lg:px-16 w-full">
      <div className="container mx-auto text-center" ref={ref}>
        {/* Section Title */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-[#F3EFDF] mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose India Exports?
        </motion.h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-[#273036] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{point.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-[#F3EFDF] mb-2">
                {point.title}
              </h3>
              {/* Description */}
              <p className="text-[#B9B8AD]">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
