import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import DreamGarageImg from "../assets/projectImg/Garage.png";
import e_shop from "../assets/projectImg/e-shop.png";
import blogfolioImg from "../assets/projectImg/Blogfolio.png";
import wetherlyImg from "../assets/projectImg/wether.png"

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "BMW M Series E-Commerce Web App – A responsive e-commerce application built with React.js, Tailwind CSS, and Redux Toolkit/Context API, featuring product listings, cart management, checkout flow, and smooth Framer Motion animations to deliver a real-world shopping experience.",
    image: DreamGarageImg,
    liveLink: "https://dreame-garage.vercel.app/",
  },
  {
    id: 2,
    title: "Dummy E-commerce e-shop",
    description:
      "E-Shop is a fully responsive, modern e-commerce website built using React.js, Vite, Tailwind CSS, Redux Toolkit, and Framer Motion. The platform simulates a real-world online shopping experience with core e-commerce functionalities. It is designed to showcase front-end development skills, state management, and UI/UX design capabilities.",
    image:e_shop,
    liveLink: "https://dummy-e-shop.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Platform | Blogfolio",
    description: "Blogfolio is a modern and responsive personal blogging and portfolio website built using React.js, Vite, Tailwind CSS, Framer Motion, React Router DOM, and Redux Toolkit.It combines the features of a portfolio website and a blogging platform, making it a perfect project for showcasing personal skills, projects, and written content.",
    image: blogfolioImg,
    liveLink: "https://dummy-blogfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Weatherly | Weather App",
    description: "Weatherly is a modern, responsive weather forecasting app built with React, Tailwind CSS, Framer Motion, and Recharts.It uses the Open-Meteo API to fetch real-time weather data, 5-day forecasts, and hourly temperature trends for any city in the world.",
    image: wetherlyImg,
    liveLink: "https://dummy-weather-web-app-gamma.vercel.app/",
  }
];

const Projects = () => {
  return (
    <>
      <div className="text-start h-auto px-14 w-full">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700 pt-14 text-start p-3"
        >
          Projects
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 "
        ></motion.hr>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          Here are some of the projects I’ve worked on – each one focused on
          writing clean code, creating smooth user experiences, and solving
          real-world problems.
        </motion.p>
      </div>
      <div className="min-h-screen bg-white py-12 px-6 font-semibold">
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
