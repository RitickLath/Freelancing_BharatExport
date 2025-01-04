import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaHandshake,
  FaGlobe,
  FaBox,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

const milestones = [
  {
    id: "beginning",
    title: "The Beginning",
    description:
      "India Exports was founded to connect India’s rich heritage of high-quality products to global markets.",
    icon: <FaHandshake className="text-blue-500 text-4xl" />,
  },
  {
    id: "globalReach",
    title: "Global Reach",
    description:
      "Expanding services to ensure seamless trade across the globe, building trust worldwide.",
    icon: <FaGlobe className="text-green-500 text-4xl" />,
  },
  {
    id: "expanding",
    title: "Expanding Services",
    description:
      "Diversified solutions including sourcing, quality assurance, and logistics management.",
    icon: <FaBox className="text-yellow-500 text-4xl" />,
  },
  {
    id: "teamBuilding",
    title: "Building a Team",
    description:
      "Growing a team of dedicated professionals to streamline international trade.",
    icon: <FaUsers className="text-purple-500 text-4xl" />,
  },
  {
    id: "communityFocus",
    title: "Community Focus",
    description:
      "Empowering local artisans and promoting sustainable practices for global impact.",
    icon: <FaHandsHelping className="text-red-500 text-4xl" />,
  },
];

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation once when 30% is visible

  return (
    <div ref={ref} className="bg-[#F3EFDF] py-20 px-6 lg:px-20 w-full">
      <motion.h2
        className="text-3xl text-center lg:text-4xl font-bold text-[#1F282A] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey: From
        <span className="text-[#A86F18]"> Vision to Global</span> Impact
      </motion.h2>
      <motion.p
        className="text-lg text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A timeline of how we built India Exports into a trusted name in the
        global trade industry.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#F9E8CF] rounded-full mx-auto mb-4">
              {milestone.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1F282A] text-center mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-600 text-center">{milestone.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
