import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1F282A] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
        {/* Company Name */}
        <div className="text-2xl font-bold text-white">India Exports</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#category"
            className="hover:text-white transition text-gray-300"
          >
            Category
          </a>
          <a
            href="#contact"
            className="hover:text-white transition text-gray-300"
          >
            Contact Us
          </a>
          <a href="#faqs" className="hover:text-white transition text-gray-300">
            FAQs
          </a>
          <a
            href="#testimonials"
            className="hover:text-white transition text-gray-300"
          >
            Testimonials
          </a>
          <a
            href="#services"
            className="hover:text-white transition text-gray-300"
          >
            Services
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            <FaBars className="text-2xl mt-2 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111212] text-gray-300 space-y-4 py-6 px-10">
          <a
            href="#category"
            className="block hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Category
          </a>
          <a
            href="#contact"
            className="block hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </a>
          <a
            href="#faqs"
            className="block hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            FAQs
          </a>
          <a
            href="#testimonials"
            className="block hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </a>
          <a
            href="#services"
            className="block hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
