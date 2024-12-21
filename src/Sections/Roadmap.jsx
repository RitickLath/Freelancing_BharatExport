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
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey: From
        <span className="text-[#A86F18]"> Vision to Global</span> Impact
      </motion.h2>
      <h1></h1>
    </div>
  );
};

export default Roadmap;
