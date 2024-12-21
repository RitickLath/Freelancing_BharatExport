import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "India Exports has been a reliable partner for our business. Their commitment to quality and timeliness is unmatched.",
    author: "John D., USA",
  },
  {
    text: "We are impressed with their professional approach and the diversity of products they offer. Highly recommended!",
    author: "Sophie L., UK",
  },
  {
    text: "Their team ensured a smooth trading experience for us. We look forward to a long-term partnership.",
    author: "Ahmed K., UAE",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#1F282A] py-20 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          className="text-center text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-lg text-[#A86F18] font-semibold">
            What Our Clients Say
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            Hear From Our Satisfied Customers.
          </h1>
          <p className="text-gray-400 mt-4 text-sm">
            See how we’ve helped businesses around the world succeed and thrive.
          </p>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="lg:w-2/3 space-y-6 text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className={`p-6 border rounded-lg shadow-lg bg-[#1A1F24] text-white cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              activeIndex === 0 ? "border-[#A86F18]" : "border-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-lg font-medium mb-3">
              {testimonials[activeIndex].text}
            </div>
            <div className="text-sm text-gray-300 font-semibold">
              – {testimonials[activeIndex].author}
            </div>
          </motion.div>

          {/* Navigation Buttons for Next and Previous (Inside Testimonial Section) */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="text-[#A86F18] text-2xl hover:text-[#d98e00] transition duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-[#A86F18] text-2xl hover:text-[#d98e00] transition duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
