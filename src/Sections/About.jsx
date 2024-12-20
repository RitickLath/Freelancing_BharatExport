import React, { useRef } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { motion, useInView } from "framer-motion"; // Import useInView for in-view detection

// Constant array holding the points
const journeyPoints = [
  {
    title: "The Beginning: Vision and Foundation",
    description:
      "India Exports was founded with the aim to connect India’s rich heritage of high-quality products to global markets. From the very beginning, our focus was on building trust and delivering excellence in every aspect of our business. Our vision was to offer seamless trade solutions while promoting India’s finest goods to the world.",
  },
  {
    title: "Building the Team",
    description:
      "The success of India Exports is rooted in the expertise and dedication of our team. We began with a small, passionate group of professionals who were committed to making international trade efficient and reliable. Today, we have expanded our team to include specialists in product sourcing, quality control, logistics, and customer service, all working together to deliver unparalleled service.",
  },
  {
    title: "Expanding Services",
    description:
      "As the market demand grew, so did our services. We evolved from a single-product offering to a comprehensive range of solutions, including sourcing, quality assurance, custom packaging, and logistics management. This diversification allowed us to cater to multiple industries, ensuring that our clients receive tailored solutions to meet their unique business needs.",
  },
  {
    title: "Building a Reputation",
    description:
      "India Exports quickly earned a reputation for reliability and excellence in international trade. By consistently providing high-quality products and maintaining timely deliveries, we’ve become a trusted partner for businesses worldwide. Our focus on customer satisfaction and transparent business practices has been key to our continued success.",
  },
  {
    title: "Community Involvement",
    description:
      "We believe in contributing to the growth of local communities and businesses. India Exports actively engages in initiatives that support local artisans, farmers, and manufacturers. By promoting sustainable practices and empowering small businesses, we aim to create positive social and economic impact both locally and globally.",
  },
];

const About = () => {
  const sectionRef = useRef(null); // Reference for the section
  const isInView = useInView(sectionRef, { threshold: 0.2, once: true }); // Check if the section is in view

  return (
    <div ref={sectionRef} className="bg-[#1F282A] py-20 w-full">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row lg:space-x-10 items-center lg:items-center">
        {/* Left Section - Image */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"
          initial={{ x: -300 }} // Start off-screen
          animate={isInView ? { x: 0 } : {}} // Animate when in view
          transition={{
            type: "spring", // Smoother transition with spring
            stiffness: 100,
            damping: 25,
            duration: 1.5,
          }}
        >
          <img
            src="/Images/ExportingLow.jpg" // Replace with your image path
            alt="Global Trade"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          className="lg:w-1/2 text-white mt-12 md:mt-0"
          initial={{ x: 300, opacity: 0 }} // Start off-screen with opacity 0
          animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
          transition={{
            type: "spring", // Smoother transition with spring
            stiffness: 100,
            damping: 25,
            duration: 1.5,
          }}
        >
          <h1 className="text-3xl text-center sm:text-left lg:text-5xl font-bold mb-4">
            How We Built Our Export Business
          </h1>
          <h2 className="text-lg text-[#B9B8AD] mb-6">
            To connect the world with India’s rich heritage of products,
            ensuring quality and fostering sustainable business relationships.
          </h2>

          <motion.div
            className="mt-6 text-[#B9B8AD]"
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut", // Smooth easing function
            }}
          >
            {journeyPoints.map((point, index) => (
              <div key={index} className="mb-6">
                <motion.div
                  className="flex items-center cursor-pointer hover:text-[#A86F18] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdOutlineVerifiedUser className="mr-3 text-xl text-[#A86F18]" />
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                </motion.div>
              </div>
            ))}
          </motion.div>

          <motion.button
            className="mt-3 rounded-sm text-lg px-6 py-2 bg-[#A86F18] text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut", // Smooth hover transition
            }}
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
