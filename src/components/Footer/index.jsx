import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

//Niha
const FooterComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_ENV_SERVICE_ID,   // Replace with your EmailJS service ID
      import.meta.env.VITE_ENV_TEMPLATE_ID ,  // Replace with your EmailJS template ID
      form.current,
      import.meta.env.VITE_ENV_USER_ID         // Replace with your EmailJS user ID
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
    });

    e.target.reset();
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-8"
      id="footer"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  className="block w-full p-2 mt-1 text-black rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="reply_to"
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
                  name="message"
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
                href="https://www.facebook.com/TEDxMDIG/"
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
                href="https://www.instagram.com/tedxmdigurgaon"
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
                  href="mailto:tedx@mdi.ac.in"
                  className="text-red-500 hover:underline"
                >
                  tedx@mdi.ac.in
                </a>
              </p>
              <p>
                Call us at:{" "}
                <a
                  href="tel:+918299241970"
                  className="text-red-500 hover:underline"
                >
                 8299241970
                </a>
              </p>
              <p>
                Address: <br></br>
                <a
                  href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
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
