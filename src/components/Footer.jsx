import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/AkashSingh1141144",
    },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMdmyIQbwQeav%2Fy6FJuUt5w%3D%3D" },
    { icon: <Twitter size={22} />, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-full h-auto">
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Akash Singh 🚀
        </motion.h1>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-6"
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-800 hover:bg-sky-600 text-white transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Akash Singh. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
