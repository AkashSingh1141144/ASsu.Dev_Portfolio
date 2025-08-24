import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      {/* 404 Number */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-7xl md:text-9xl font-bold text-red-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4"
      >
        Page Not Found
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-500 mt-2"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
