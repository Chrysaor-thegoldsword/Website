import "./App.css";
import NavbarComponent from "./components/Navbar/index";
import Carousel from "./components/Carousel";
import ScrollFadeComponent from "./components/ScrollFadeComponent/index";
import ImageTextSection from "./components/ImageSection/index";
import FooterComponent from "./components/Footer/index";
import ScrollTopButton from "./components/ScrollTop/index";
import video from "./assets/videoplayback.mp4";
import image1 from "./assets/p2.jpg";
import image2 from "./assets/p3.png";
import p1 from "./assets/conv_event/1 (1).jpeg";
import p2 from "./assets/conv_event/1 (2).jpeg";
import p3 from "./assets/conv_event/1 (3).jpeg";
import p4 from "./assets/conv_event/1 (4).jpeg";
import p5 from "./assets/conv_event/1 (7).jpeg";
import akash from "./assets/PresentSpeakers/AKASH GUPTA.jpeg";
import ankur from "./assets/PresentSpeakers/ANKUR WARIKOO.jpeg";
import zoya from "./assets/PresentSpeakers/CAPTAIN ZOYA AGARWAL.jpeg";
import anand from "./assets/PresentSpeakers/DR. ANAND S.jpeg";
import awdhesh from "./assets/PresentSpeakers/DR. AWDHESH SINGH.jpeg";
import vandana from "./assets/PresentSpeakers/MAJOR VANDANA SHARMA.jpeg";
import puneet from "./assets/PresentSpeakers/PUNEET RAO.jpeg";
import vicky from "./assets/PresentSpeakers/VICKY ROY.jpeg";
import vikram from "./assets/PresentSpeakers/VIKRAM RAI.jpeg";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const App = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  const pastEvents = [
    { id: 1, name: "Team", image: p1, member: "Senior member" },
    { id: 2, name: "Team", image: p2, member: "Senior member" },
    { id: 3, name: "Team", image: p3, member: "Senior member" },
    { id: 4, name: "Prahatlhan", image: p4, member: "Senior member" },
    { id: 5, name: "Terence", image: p5, member: "Senior member" },
  ];

  const teamMembers = [
    { id: 1, name: "Akash Gupta, Founder ZYPP Electric", image: akash, member: "Senior member" },
    { id: 2, name: "Ankur Warikoo", image: ankur, member: "Senior member" },
    { id: 3, name: "Captain Zoya Agarwal, Pilot", image: zoya, member: "Senior member" },
    { id: 4, name: "S Anand", image: anand, member: "Senior member" },
    { id: 5, name: "Awdhesh Singh", image: awdhesh, member: "Senior member" },
    { id: 6, name: "Major Vandana", image: vandana, member: "Senior member" },
    { id: 7, name: "Puneet Rao, Fitness Influencer", image: puneet, member: "Senior member" },
    { id: 8, name: "Vicky Roy, International Photographer", image: vicky, member: "Senior member" },
    { id: 9, name: "Vikram Rai, MD GE South Asia", image: vikram, member: "Senior member" },
  ];

  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.hash !== "") {
        event.preventDefault();
        const hash = target.hash;
        const element = document.querySelector(hash);
        const offsetTop = element.offsetTop - document.querySelector("nav").offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };
  
    document.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });
  
    return () => {
      document.querySelectorAll("a").forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  

  useEffect(() => {
    if (videoEnded) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <>
      <AnimatePresence>
        <ScrollTopButton />
        {!videoEnded && isChrome && (
          <motion.video
            src={video}
            id="tedxVideo"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="fixed top-0 left-0 w-full h-full bg-black object-scale-down md:object-cover z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      {(!isChrome || videoEnded) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavbarComponent />
          <div
            className="sticky flex items-center justify-center h-screen text-white"
            style={{ backgroundColor: "black" }}
          >
            <div className="z-20 text-center">
              {window.innerWidth > 400 ? (
                <Typewriter
                  options={{
                    className: "text-4xl",
                    strings: [
                      '<span style="color: red;font-size:64px">TEDx</span><span style="color: white;font-size:64px">MDIGurgaon</span>',
                      '<span style="color: white;font-size:48px">Embracing The Shift</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
              ) : (
                <Typewriter
                  options={{
                    className: "text-4xl",
                    strings: [
                      '<span style="color: red;font-size:36px">TEDx</span><span style="color: white;font-size:36px">MDIGurgaon</span>',
                      '<span style="color: white;font-size:24px">Embracing The Shift</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                />
              )}
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-30 z-10"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>
          </div>
          <motion.section
            className="min-h-screen bg-gray-700 text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Speaker Line-Up
            </h2>
            <Carousel images={teamMembers} number={3} />
            <div className="container mx-auto py-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl font-bold mb-4"
                >
                  Welcome to TEDxMDIGurgaon
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-lg"
                >
                  TEDxMDIGurgaon brings together bright minds to give talks that
                  are idea-focused, and on a wide range of subjects, to foster
                  learning, inspiration, and wonder – and provoke conversations
                  that matter.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            className="min-h-screen bg-black text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="services"
          >
            <h2 className="text-3xl font-bold mb-4">TED & TEDx</h2>
            <ImageTextSection />
          </motion.section>
          <motion.section
            className="min-h-screen bg-gray-900 text-white p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="about"
          >
            <h2 className="text-3xl font-bold mb-8 w-full text-center">
              Past Events
            </h2>
            <Carousel images={pastEvents} />
            <div className="container mx-auto px-4">
              <div className="sticky">
                <ScrollFadeComponent />
              </div>
            </div>
          </motion.section>
          <FooterComponent />
        </motion.div>
      )}
    </>
  );
};

export default App;
