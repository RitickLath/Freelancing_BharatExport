import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
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
      className={`py-1 fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1F282A] shadow-lg" : "bg-[#1F282A] bg-opacity-50"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
        {/* Company Name */}
        <img
          src="Images/LogoCompress.png"
          className={`lg:-ml-12 w-[120px] ${isLoaded ? " hidden" : "block"}`}
        />
        <img
          onLoad={() => setIsLoaded(true)}
          src="Images/LogoHighRes.png"
          className={`lg:-ml-12 w-[120px] ${isLoaded ? " block" : "hidden"}`}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleScrollToSection("category")}
            className="hover:text-white transition text-gray-300"
          >
            Category
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="hover:text-white transition text-gray-300"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleScrollToSection("faqs")}
            className="hover:text-white transition text-gray-300"
          >
            FAQs
          </button>
          <button
            onClick={() => handleScrollToSection("testimonials")}
            className="hover:text-white transition text-gray-300"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="hover:text-white transition text-gray-300"
          >
            Services
          </button>
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
          <button
            onClick={() => handleScrollToSection("category")}
            className="block hover:text-white transition"
          >
            Category
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="block hover:text-white transition"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleScrollToSection("faqs")}
            className="block hover:text-white transition"
          >
            FAQs
          </button>
          <button
            onClick={() => handleScrollToSection("testimonials")}
            className="block hover:text-white transition"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="block hover:text-white transition"
          >
            Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
