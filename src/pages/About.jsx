import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="text-start h-auto px-14 w-full mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700 pt-14 text-start p-3"
        >
          About Me
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
        ></motion.hr>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          I’m a passionate Front-End Developer who loves turning ideas into
          seamless digital experiences. I specialize in HTML, CSS, JavaScript,
          Tailwind CSS, React.js, Git & GitHub, building responsive, fast, and
          user-friendly interfaces.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 pt-4 text-start "
        >
          My Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          I started web development out of curiosity —{" "}
          <span className="from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            “How do websites actually work?”
          </span>{" "}
          . That small question turned into a passion. I began with HTML, CSS,
          and JavaScript, and step by step I grew into building responsive and
          dynamic applications with React.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 text-start pt-8"
        >
          What I Do Best
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-2 space-y-1"
        >
          <p className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
            I work with:
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-600 px-4 sm:px-6 md:px-8">
            <span className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">Frontend: </span>
            HTML, CSS, React.js, JavaScript, Tailwind CSS
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-600 px-4 sm:px-6 md:px-8">
            <span className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
              Version Control:{" "}
            </span>
            Git & GitHub
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-600 px-4 sm:px-6 md:px-8">
            <span className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">Extra Skills: </span>
            Clean code, responsive UI, and creating smooth user experiences
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 text-start pt-8"
        >
          My Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          I believe a good developer is not just someone who writes code but
          someone who builds experiences. That’s why I put equal effort into
          design, usability, and performance, ensuring that every project I work
          on feels seamless and impactful.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 text-start pt-8"
        >
          Beyond Coding
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          When I’m not writing code, you’ll probably find me:
          <br />
          Exploring new tech trends 💻
          <br />
          Reading about startups & innovations 📖
          <br />
          Experimenting with design & UI ideas 🎨
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 text-start pt-8"
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          I’m always open to opportunities, collaborations, and meaningful
          conversations around technology. Let’s build something amazing
          together!
        </motion.p>

        {/* Navigate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex justify-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full sm:w-auto transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default About;
