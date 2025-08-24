import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = ({ links, isMobile = false, onLinkClick }) => {
  const location = useLocation();

  return (
    <ul
      className={`flex text-gray-800 ${
        isMobile ? "flex-col items-center gap-4 py-4" : "gap-8"
      } font-semibold`}
    >
      {links.map((link, i) => (
        <motion.li
          key={link.name}
          initial={{ opacity: 0, y: isMobile ? 0 : -8, x: isMobile ? -16 : 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.08 * i }}
        >
          <Link
            to={link.path}
            className={`transition ${
              location.pathname === link.path ? "text-sky-600" : "hover:text-sky-600"
            }`}
            onClick={onLinkClick}   // ✅ link click karte hi menu band ho jaayega
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;
