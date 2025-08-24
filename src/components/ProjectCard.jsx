import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Live Link
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
