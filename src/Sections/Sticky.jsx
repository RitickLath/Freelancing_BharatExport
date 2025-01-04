import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Sticky = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="">
      {/* WhatsApp Icon */}
      <motion.div
        onClick={() => setVisible(!visible)}
        className="z-20 bg-green-500 text-white rounded-lg p-1 cursor-pointer fixed bottom-5 right-5"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, -10, 10, 0],
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-4xl" />
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="z-20 fixed bottom-20 right-6 w-[70%] sm:w-72 bg-[#111B21] rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9, y: 50 }} // Animation on entry
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }} // Animation on exit
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Chat Header */}
            <div className="rounded-t-xl flex items-center bg-[#005C4B] text-white px-4 py-2">
              <img
                src="Images/wp.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-grow">
                <h4 className="text-sm font-semibold">India Exports</h4>
                <p className="text-xs text-green-200">online</p>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="text-white text-lg focus:outline-none hover:text-gray-200"
              >
                <IoClose />
              </button>
            </div>

            {/* Chat Body */}
            <div className="px-4 pb-16 pt-4 bg-[#111B21]">
              <div className="inline-block bg-green-100 text-gray-800 rounded-lg px-4 py-2 text-sm">
                Glad to see you here!
                <br />
                How can I help you?
              </div>
            </div>

            {/* Chat Footer */}
            <div className="rounded-b-xl px-4 py-3 bg-white border-t border-gray-200 text-center">
              <button
                className="bg-[#128C7E] text-white py-1 px-4 rounded-lg hover:bg-green-700 transition"
                onClick={() => {
                  window.open("https://wa.me/919903893445", "_blank");
                }}
              >
                Start chat
              </button>

              <p className="text-xs text-gray-500 mt-2">
                ⚡ by{" "}
                <a
                  href="https://www.aisensy.com/"
                  className="text-green-600 hover:underline"
                >
                  India Exports
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sticky;
