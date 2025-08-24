import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaClock,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
  },
  { name: "React JS", icon: <FaReact className="text-cyan-500 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
  {name: "Future", icon: <FaClock className="text-orange-500 text-3xl" />},
];

const SkillsMarquee = () => {
  return (
    <section className="py-12 px-6">
      {/* === Grid Layout (Border Only) === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 pb-16"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-6 py-6 border border-gray-300 rounded-2xl hover:shadow-md transition-all"
          >
            {skill.icon}
            <p className="mt-2 font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </motion.div>

      {/* === Marquee Section (With Gradient BG Pills) === */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="overflow-hidden whitespace-nowrap border-y border-gray-300 py-4"
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {/* First Set */}
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-slate-300 to-zinc-100 text-gray-700 rounded-full font-medium inline-block shadow-md"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
          {/* Duplicate Set for seamless loop */}
          {skills.map((skill, index) => (
            <span
              key={index + skills.length}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-slate-300 to-zinc-100 text-gray-700 rounded-full font-medium inline-block shadow-md"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsMarquee;
