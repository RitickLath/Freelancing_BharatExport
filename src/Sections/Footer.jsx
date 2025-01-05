import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F282A] py-3">
      <div className="mx-auto px-6 lg:px-20">
        {/* Social Media Section */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between items-center">
          <p className="text-center text-gray-400">
            © 2024 India Exports. All Rights Reserved.
          </p>
          {/* <div className="flex space-x-6 text-[#A86F18]">
            <a
              href="https://www.notion.so/Bharat-Exports-162e57a2fb558095bd65e05947a94fa4?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.notion.so/Bharat-Exports-162e57a2fb558095bd65e05947a94fa4?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.notion.so/Bharat-Exports-162e57a2fb558095bd65e05947a94fa4?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl hover:text-white transition duration-300" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
