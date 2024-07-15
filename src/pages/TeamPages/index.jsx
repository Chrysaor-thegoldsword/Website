import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";

import animesh from "../../assets/team/animesh.jpeg";
import utsukh from "../../assets/team/utsukh.png";
import shrish from "../../assets/team/shrish.png";
import ayan from "../../assets/team/ayan.jpeg";
// import karthikeyan from "../../assets/team/karthikeyan.jpg";
import mohak from "../../assets/team/mohak.png";
import mukul from "../../assets/team/mukul.jpeg";
import pankhuri from "../../assets/team/Pankhuri.jpeg";
import sanchita from "../../assets/team/sanchita.jpg";
import shweta from "../../assets/team/shweta.jpeg";
import siddhant from "../../assets/team/siddhant.png";
import harsha from "../../assets/team/SVS Sri Harsha.png";
import vanmit from "../../assets/team/vanmit.jpeg";
import varun from "../../assets/team/varun.png";
import yash from "../../assets/team/Yash.jpeg";


const TeamPage = () => {
  const teamMembers24 =  [
    { id: 1, name: "Animesh", image: animesh, member: "Senior member" },
    { id: 2, name: "Utsukh", image: utsukh, member: "Senior member" },
    { id: 3, name: "shrish", image: shrish, member: "Senior member" },
    { id: 4, name: "ayan", image: ayan, member: "Senior member" },
    // { id: 5, name: "karthikeyan", image: karthikeyan, member: "Senior member" },
    { id: 6, name: "pankhuri", image: pankhuri, member: "Senior member" },
    { id: 7, name: "sanchita", image: sanchita, member: "Senior member" },
    { id: 7, name: "shweta", image: shweta, member: "Senior member" },
    { id: 7, name: "sanchita", image: sanchita, member: "Senior member" },
    { id: 7, name: "siddhant", image: siddhant, member: "Senior member" },
    { id: 7, name: "harsha", image: harsha, member: "Senior member" },
    { id: 7, name: "vanmit", image: vanmit, member: "Senior member" },
    { id: 7, name: "varun", image: varun, member: "Senior member" },
    { id: 7, name: "yash", image: yash, member: "Senior member" },
  ];
  const teamMembers23 = [
    { name: "Alice", designation: "Developer", image: "/path/to/image1.jpg" },
    { name: "Bob", designation: "Designer", image: "/path/to/image2.jpg" },
    { name: "Charlie", designation: "Manager", image: "/path/to/image3.jpg" },
    // Add more members as needed
  ];
  const teamMembers22 = [
    { name: "Alice", designation: "Developer", image: "/path/to/image1.jpg" },
    { name: "Bob", designation: "Designer", image: "/path/to/image2.jpg" },
    { name: "Charlie", designation: "Manager", image: "/path/to/image3.jpg" },
    // Add more members as needed
  ];

  return (
    <div>
      <NavbarComponent />
      <div className="mx-auto">
        <TeamSection title="Team 2023-24" teamMembers={teamMembers24} />
        <TeamSection title="Team 2022-23" teamMembers={teamMembers23} />
        <TeamSection title="Team 2021-22" teamMembers={teamMembers22} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default TeamPage;
