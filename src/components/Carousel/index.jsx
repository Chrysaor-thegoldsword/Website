import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Carousel = ({ images,number=3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number, // Show 3 slides on desktop
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div>
      <Slider {...settings} className="mx-4">
        {images.map((member, index) => (
          <div key={index} className="px-2">
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-md"
              whileHover="hover"
              variants={hoverVariants}
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-64 sm:h-48 md:h-72 rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black p-4">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300">{member.designation}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
