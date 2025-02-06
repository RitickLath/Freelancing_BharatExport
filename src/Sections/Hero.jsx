import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cimages = [
  "/Images/CMakhana1.jpg",
  "/Images/CMakhana2.jpg",
  "/Images/CMakhana3.jpg",
  "/Images/CMakhana4.jpg",
];

const images = [
  "/Images/Makhana1.jpg",
  "/Images/Makhana2.jpg",
  "/Images/Makhana3.jpg",
  "/Images/Makhana4.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(
    new Array(images.length).fill(false)
  );

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Preload High-Quality Images
  useEffect(() => {
    images.forEach((img, index) => {
      const image = new Image();
      image.src = img;
      image.onload = () => {
        setLoadedImages((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  // Animation Variants for Texts (Coming from the Bottom)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-screen">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={loadedImages[index] ? image : Cimages[index]} // Use compressed image if not loaded
            alt={`Slide ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Black Film (Overlay) */}
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-60"></div>

      {/* Animated Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12"
        initial="hidden"
        animate="visible"
      >
        {/* "India Exports" Text Animated from Bottom */}
        <motion.h1
          variants={textVariants}
          className="mb-2 md:mb-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white"
        >
          - India Exports -
        </motion.h1>

        {/* Description Text Animated from Bottom */}
        <motion.h2
          variants={textVariants}
          className="text-center max-w-[330px] lg:max-w-[600px] text-[#faf8e8] mb-6"
        >
          Your gateway to premium quality products from India. We specialize in
          delivering excellence across global markets. Partner with us for
          unmatched reliability and value.
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
