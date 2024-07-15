import React from "react";
import { motion } from "framer-motion";

const FooterComponent = () => {

    
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-8"
      id='footer'
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full p-2 mt-1 text-black rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full p-2 mt-1 text-black rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full p-2 mt-1 text-black rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg font-semibold"
            >
              TEDxMDIGurgaon
            </motion.div>
            <div className="text-center text-sm">
              <p>© 2024 TEDxMDIGurgaon. All rights reserved.</p>
              <p>Follow us on social media:</p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </motion.a>
              <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </motion.a>
            </div>
            <div className="text-center text-sm space-y-2">
              <p>
                Email us at:{" "}
                <a
                  href="mailto:contact@tedxmdigurganon.com"
                  className="text-red-500 hover:underline"
                >
                  contact@tedxmdigurganon.com
                </a>
              </p>
              <p>
                Call us at:{" "}
                <a
                  href="tel:+123456789"
                  className="text-red-500 hover:underline"
                >
                  +123 456 789
                </a>
              </p>
              <p>
                Address: <br></br>
                <a
                  href="tel:+123456789"
                  className="text-red-500 hover:underline"
                >
                  Mehrauli Rd, Block C, Sukhrali, Sector 17, Gurugram, Haryana
                  122007
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterComponent;
