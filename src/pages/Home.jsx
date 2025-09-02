// import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import SkillsMarquee from "../components/SkillsMarquee";
import { Link } from "react-router-dom";
import heroImg from "../assets/Akash.jpg";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

const Home = () => {
  // Resume download handler
  const handleResumeDownload = () => {
    toast.success("Resume downloaded successfully ✅", {
      duration: 3000,
      position: "top-center",
    });
  };

  return (
    <>
      <Toaster /> {/* ✅ Toast container */}

      <div className="text-start px-14 w-full h-auto">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700 pt-20 text-start p-3"
        >
          Akash Singh | ASsu.Dev
        </motion.h1>

        {/* Hero Image */}
        <div className="w-full flex items-center justify-center overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto max-h-screen object-contain"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Intro Section */}
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-700 pt-8"
        >
          Hi, I'm{" "}
          <span className="from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Akash Kumar Singh
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-3xl font-semibold text-gray-700 mt-8"
        >
          Crafting Interactive & Modern Web Experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans"
        >
          I’m a passionate Front-End Developer who loves turning ideas into
          seamless digital experiences...
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          {/* ✅ Resume Button with toast */}
          <motion.a
            href="/resume.pdf"
            download="resume.pdf"
            onClick={handleResumeDownload} // ✅ toast trigger
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full sm:w-auto text-center"
          >
            Download Resume
          </motion.a>

          {/* View Projects */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full sm:w-auto text-center inline-block"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
