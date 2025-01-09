import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHandshake, FaGlobe, FaBox, FaUsers } from "react-icons/fa";

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
    <div className="bg-[#F3EFDF] py-20 px-6 lg:px-20 w-full">
      {/* About Us Section */}
      <motion.section
        ref={ref}
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1F282A] text-center mb-8">
          About India Exports
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-4">
          At <span className="font-semibold text-[#A86F18]">India Exports</span>
          , we are proud to be a part of the new generation of entrepreneurs
          from India, driven by passion, innovation, and a commitment to
          excellence.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-4">
          Rooted in{" "}
          <span className="text-[#A86F18] font-semibold">
            India’s rich heritage
          </span>{" "}
          and fueled by a vision for a global future, we specialize in exporting
          premium-quality products that reflect the diverse and vibrant culture
          of our country.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Our focus on quality, trust, and innovation ensures that every product
          we export not only meets but exceeds global standards. Partner with us
          to experience the excellence of Indian products.
        </p>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#A86F18] text-center mb-4">
          Our Journey to Excellence
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          From our humble beginnings to becoming a global exporter, our roadmap
          highlights the key milestones of our journey.
        </p>

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
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center px-4 py-10 bg-[#FFF8E3] rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-[#1F282A] mb-4">
          Partner with India Exports
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Explore premium-quality Indian products crafted to perfection. Whether
          you’re a business or an individual, let us deliver excellence to you.
        </p>
        <a href="mailto:help@indiaexports.co.in">
          <button className="px-6 py-3 bg-[#A86F18] text-white font-semibold rounded-md hover:bg-[#855011] transition">
            Get in Touch
          </button>
        </a>
      </motion.section>
    </div>
  );
};

export default Roadmap;
