import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-center z-50">
      {/* Mouse shape */}
      <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex items-start justify-center">
        <motion.div
          className="w-1 h-2 sm:h-3 bg-gray-500 rounded-full mt-1 sm:mt-2"
          animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Text */}
      <motion.p
        className="mt-1 text-gray-600 font-medium text-[10px] sm:text-xs"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.p>
    </div>
  );
};

export default ScrollIndicator;
