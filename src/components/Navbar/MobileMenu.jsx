import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, navLinks, onLinkClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobileMenu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-white shadow-lg text-gray-800"
        >
          <NavLinks links={navLinks} isMobile onLinkClick={onLinkClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
