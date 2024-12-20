import { motion } from "framer-motion";

const Hero = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: faded out and slightly below
    visible: {
      opacity: 1,
      y: 0, // Final state: fully visible and at normal position
      transition: { duration: 1, ease: "easeOut" }, // Smooth animation
    },
  };

  return (
    <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="bg-black absolute top-0 left-0 w-full h-full aspect-video object-cover"
        src="/videos/LandingPage.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        poster="/images/Poster.jpeg"
      ></video>

      {/* Black Film (Overlay) */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Animated Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariants}
          className="mb-2 md:mb-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white"
        >
          India Exports
        </motion.h1>
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
