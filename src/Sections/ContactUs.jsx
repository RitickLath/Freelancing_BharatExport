import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/+918595111194?text=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleMail = () => {
    const mailtoURL = `mailto:inquiries@offshorexports.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(mailtoURL);
  };

  return (
    <div id="contactUs" className="bg-[#F3EFDF] py-20 px-6 lg:px-20 w-full">
      <div className="container mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center">
        {/* ContactUs Form */}
        <div className="w-full lg:w-1/2 mx-auto mb-10 lg:mb-0">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-[#191615] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          <motion.h2
            className="text-[#191615] mb-10 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Partner with Us for Expert-Led Success
          </motion.h2>

          {/* ContactUs Form */}
          <div className="w-full lg:w-3/4 mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Type your message..."
              className="w-full p-4 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-10">
            <button
              onClick={handleMail}
              className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center"
            >
              <MdEmail className="mr-2 text-xl" />
              Mail Me
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 flex items-center"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Me
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-1/2 lg:ml-12 text-left">
          {/* Phone Numbers and Email */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-lg text-[#191615]">
              <MdPhone className="text-[#A86F18] text-2xl mr-4" />
              <span className="text-[#191615]">+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center text-lg text-[#191615]">
              <MdPhone className="text-[#A86F18] text-2xl mr-4" />
              <span className="text-[#191615]">+1 (555) 987-6543</span>
            </div>

            <div className="flex items-center text-lg text-[#191615]">
              <MdEmail className="text-[#A86F18] text-2xl mr-4" />
              <span className="text-[#191615]">support@ourcompany.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
