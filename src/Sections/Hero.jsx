import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Animation Variants for Texts (Coming from the Bottom)
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially faded out and slightly below
    visible: {
      opacity: 1,
      y: 0, // Final state: fully visible and in normal position
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Handle the video load event
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Load Event */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/LandingPage.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        onCanPlay={handleVideoLoad} // Trigger the state change when the video is ready
      ></video>

      {/* Black Film (Overlay) */}
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-60"></div>

      {/* Loading Placeholder / Animation */}
      {!isVideoLoaded && (
        <div className="absolute h-screen inset-0 flex items-center justify-center bg-black opacity-60">
          {/* Example Loading Spinner */}
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

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
          className="text-center max-w-[330px] lg:max-w-[600px] text-[#B9B8AD] mb-6"
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
