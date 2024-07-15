import image from "../../assets/p2.jpg";
// src/components/ImageTextSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import image from '../assets/your-image.jpg'; // Replace with your actual image path

const ImageTextSection = () => {
  return (
    <section className="min-h-auto flex flex-col md:flex-row items-center bg-black text-white pt-8">
      <motion.div
        className="w-full md:w-1/2 p-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="Descriptive Alt Text" className="w-full h-auto rounded-lg" />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 p-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About TED</h2>
          <p className="text-sm md:text-lg">TED, which stands for Technology, Entertainment, and Design, is a global platform dedicated to spreading ideas through short, powerful talks. It was founded in 1984 by Richard Saul Wurman and Harry Marks in Monterey, California. Originally conceived to converge these three fields, TED has since expanded to cover a vast array of topics including science, business, and global issues. Renowned for its high-quality speakers and thought-provoking content, TED inspires and informs millions around the world. </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About TEDx</h2>
          <p className="text-sm md:text-lg">TEDx is an independently organized event licensed by TED, designed to bring the spirit of TED’s mission of spreading ideas to local communities around the globe. These events are organized by passionate volunteers from the community, who seek to create a platform for sharing innovative ideas and fostering meaningful discussions. Each TEDx event features a combination of live speakers and pre-recorded TED Talks, sparking deep conversations and connections at a more intimate, local level. TEDx events embody the core principles of TED, encouraging curiosity, creativity, and inspiration within diverse communities.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageTextSection;
