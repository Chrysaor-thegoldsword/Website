import React from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollFadeComponent = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const threshold = window.innerHeight / 2; // Adjust as needed

    if (yOffset > threshold + 12) {
      controls.start({ opacity: 1, y: -50 });
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="absolute top-4 left-0 right-0 text-center font-bold text-xl z-50"
    >
      <motion.div className="py-2 mt-12">
        <motion.div className="mb-2">TEDxMDIGurgaon</motion.div>
        <motion.div className="mb-2">
          TEDxMDIGurgaon was started in 2016 as an independently organized TEDx
          event under the license of TED. Hosted at the Management Development
          Institute (MDI) in Gurgaon, it aims to bring together a diverse group
          of speakers and attendees to foster an environment of innovation,
          inspiration, and impactful ideas. TEDxMDIGurgaon provides a platform
          for thought leaders from various fields to share their experiences and
          insights, sparking meaningful conversations 
        </motion.div>
      </motion.div>
      {/* <motion.div className="py-2">
        <motion.div className="mb-2">About TEDx</motion.div>
        <motion.div className="mb-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.div>
      </motion.div> */}
    </motion.div>
  );
};

export default ScrollFadeComponent;
