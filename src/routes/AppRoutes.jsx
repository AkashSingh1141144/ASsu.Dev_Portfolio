// src/routes/AppRoutes.jsx
import React, { lazy } from "react";
import Home from "../pages/Home"; // Home direct import

// Lazy loaded pages
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Footer = lazy(() => import("../components/Footer"));


const AppRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
  { path: "*", element: <Footer /> },
];

export default AppRoutes;
