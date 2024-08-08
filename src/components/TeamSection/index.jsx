import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSection = ({ title, teamMembers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-16 bg-black px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-500">
        {title}
      </h2>
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>
            <p className="text-gray-500">{member.designation}</p>
          </motion.div>
        ))}
      </div>
      <div className="lg:hidden">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <motion.div
                className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.designation}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
