import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHandshake,
  FaGlobe,
  FaBox,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

// Updated milestones specific to your business
const milestones = [
  {
    id: "01",
    title: "Planning and Development",
    description:
      "We started with in-depth research and built a solid plan to bring India’s premium offerings to global markets. This included identifying key industries and products representing India's rich heritage.",
    icon: <FaHandshake className="text-blue-500 text-3xl" />,
  },
  {
    id: "02",
    title: "Launch and Adjust",
    description:
      "Our initial launch focused on exporting high-quality products to a few trusted markets. We used customer feedback to refine our processes and ensure world-class service.",
    icon: <FaGlobe className="text-green-500 text-3xl" />,
  },
  {
    id: "03",
    title: "Growth and Expansion",
    description:
      "With growing trust and demand, we expanded our services to include logistics, sourcing, and quality assurance. This allowed us to deliver Indian goods to a wider global audience.",
    icon: <FaBox className="text-yellow-500 text-3xl" />,
  },
  {
    id: "04",
    title: "Consolidation and Innovation",
    description:
      "We now focus on strengthening our position by improving sustainability practices, empowering local artisans, and continuously innovating for long-term impact in global markets.",
    icon: <FaUsers className="text-purple-500 text-3xl" />,
  },
];

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="bg-[#F3EFDF] py-20 px-6 lg:px-20 w-full">
      <motion.h2
        className="text-3xl text-center lg:text-4xl font-bold text-[#1F282A] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        Our Roadmap to Success
      </motion.h2>
      <motion.p
        className="text-lg text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Step-by-step, we build a sustainable and impactful future.
      </motion.p>

      <div className="flex flex-col space-y-12 lg:flex-row items-center lg:space-y-0">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className="relative flex flex-col items-center w-full lg:w-1/4 max-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#F9E8CF] rounded-full mb-4">
              {milestone.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1F282A] text-center mb-2">
              {milestone.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 max-w-[400px] text-center">
              {milestone.description}
            </p>
            {/* Number */}
            <div className="text-xl hidden lg:flex font-bold text-[#A86F18] mt-6 lg:static absolute bottom-[-2rem] lg:bottom-auto">
              {milestone.id}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
