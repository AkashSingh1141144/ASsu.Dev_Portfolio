import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import SkillsMarquee from "../components/SkillsMarquee";
// import ScrollIndicator from "../components/ScrollIndicator";
import { Link } from "react-router-dom";
import heroImg from "../assets/Akash.jpg";
// import Projects from "./Projects";

const Projects = lazy(() => import("./Projects"));

const Home = () => {
  return (
    <>
      <div className="text-start px-14 w-full h-auto">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700 pt-20 text-start p-3"
        >
          Akash Singh | ASsu.Dev
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mt-8"
        ></motion.hr>

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

    <motion.hr
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
        ></motion.hr>

        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-700 pt-8"
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
          seamless digital experiences. I specialize in HTML, CSS, JavaScript,
          Tailwind CSS, React.js, Git & GitHub, building responsive, fast, and
          user-friendly interfaces.
        </motion.p>
        {/* <motion.hr
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
        ></motion.hr> */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-600 mt-2 text-2xl font-semibold"
        >
          Whether it’s a complex web application or a simple landing page, I
          bring creativity, clean code, and a problem-solving mindset to every
          project I work on.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          {/* Resume Button */}
          <motion.a
            href="/resume.pdf" 
            download="resume.pdf"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full sm:w-auto text-center"
          >
            Download Resume
          </motion.a>

          {/* View Projects Button */}
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

        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          // animate={{opacity:1, x:0}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-700 mt-8 text-center p-3"
        >
          "I turn coffee ☕ into code 💻 and ideas into reality 🌟"
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          // animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 mt-8 text-start p-3 leading-snug"
        >
          Skills & Expertise
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
        ></motion.hr>
        {/* <ScrollIndicator /> */}
        <SkillsMarquee />

        <Suspense fallback={<div className="text-center py-20 text-cyan-400 text-lg font-bold">Loading...</div>}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
                            < Projects />

        </motion.div>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
