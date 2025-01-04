import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What types of products do you export?",
    answer:
      "We export agricultural goods, handicrafts, textiles, and industrial products.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We serve clients in North America, Europe, the Middle East, and Asia.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We have a robust quality control system in place, ensuring every product meets international benchmarks.",
  },
  {
    question: "What are the shipping options available?",
    answer:
      "We provide air, sea, and land shipping options based on client preferences.",
  },
  {
    question: "How do you handle customs and regulations?",
    answer:
      "Our team ensures seamless compliance with all customs and regulatory requirements.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true });
  const isRightInView = useInView(rightRef, { once: true });

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="faqs" className="bg-[#1F282A] -mt-2 py-20 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row lg:space-x-16">
        {/* Left Section - Heading */}
        <motion.div
          ref={leftRef}
          className="lg:w-[45%] text-white mb-12 lg:mb-0"
          initial={{ x: -200, opacity: 0 }}
          animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-lg text-[#A86F18] font-semibold">
            Frequently Asked Questions
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            Got Questions? We’ve Got Answers.
          </h1>
          <p className="text-gray-400 mt-4 text-sm">
            Have any concerns? Browse through the most common queries below or
            contact us if your question isn’t answered.
          </p>

          {/* Display for desktop only */}
          <p className="text-sm text-gray-300 mt-4 lg:block hidden">
            Can’t find your question?{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#FFB400] font-semibold hover:underline"
            >
              Mail us
            </a>
            .
          </p>
        </motion.div>

        {/* Right Section - FAQ List */}
        <motion.div
          ref={rightRef}
          className="lg:w-2/3 space-y-6"
          initial={{ x: 200, opacity: 0 }}
          animate={isRightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`p-6 border rounded-lg shadow-lg bg-[#1A1F24] text-white cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                activeIndex === index ? "border-[#FFB400]" : "border-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaMinus className="text-[#A86F18]" />
                ) : (
                  <FaPlus className="text-gray-400" />
                )}
              </div>
              {activeIndex === index && (
                <motion.div
                  className="mt-3 text-sm text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Display for mobile only */}
          <p className="text-sm text-gray-300 mt-8 lg:hidden block">
            Can’t find your question?{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#FFB400] font-semibold hover:underline"
            >
              Mail us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
