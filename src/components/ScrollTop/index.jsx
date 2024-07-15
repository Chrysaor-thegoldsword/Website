// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className={`fixed bottom-4 right-4 ${visible ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={scrollToTop}
        className="p-4 rounded-full bg-black text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
      >
        ↑
      </button>
    </motion.div>
  );
};

export default ScrollToTopButton;
