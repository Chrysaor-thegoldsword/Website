import React from "react";
import NavbarComponent from "../../components/Navbar";
import TeamSection from "../../components/TeamSection";
import FooterComponent from "../../components/Footer";

import utsukh from "../../assets/team/utsukh.png";
import shrish from "../../assets/team/shrish.png";
import ayan from "../../assets/team/ayan.jpeg";
import karthikeyan from "../../assets/team/karthik.jpeg";
import mohak from "../../assets/team/mohak.png";
import mukul from "../../assets/team/mukul.jpeg";
import pankhuri from "../../assets/team/Pankhuri.jpeg";
import sanchita from "../../assets/team/sanchita.jpg";
import shweta from "../../assets/team/shweta.jpeg";
import siddhant from "../../assets/team/siddhant.png";
import harsha from "../../assets/team/SVS Sri Harsha.png";
import lakshya from "../../assets/team/lakshya.png";
import varun from "../../assets/team/varun.png";
import yash from "../../assets/team/Yash.jpeg";

import Abhiraj from "../../assets/junior_team/Abhiraj.jpeg";
import Anurupa from "../../assets/junior_team/Anurupa.jpeg";
import Jahnavi from "../../assets/junior_team/Jahnavi.jpeg";
import Sanskar from "../../assets/junior_team/Sanskar.jpeg";
import Divya from "../../assets/junior_team/Divya.jpeg";
import Jai from "../../assets/junior_team/Jai.jpeg";
import Mollshree from "../../assets/junior_team/Mollshree.jpeg";
import Kashavi from "../../assets/junior_team/Kashavi.jpeg";
import Deepanshu from "../../assets/junior_team/Deepanshu.jpeg";
import Anirudha from "../../assets/junior_team/Anirudha.png";
import Ispita from "../../assets/junior_team/Ispita.jpeg";


const TeamPage = () => {
  const teamMembers23 = [
    { id: 2, name: "Utsukh", image: utsukh, member: "Senior member" },
    { id: 3, name: "Shrish", image: shrish, member: "Senior member" },
    { id: 4, name: "Ayan", image: ayan, member: "Senior member" },
    { id: 5, name: "Karthikeyan", image: karthikeyan, member: "Senior member" },
    { id: 6, name: "Pankhuri", image: pankhuri, member: "Senior member" },
    { id: 7, name: "Sanchita", image: sanchita, member: "Senior member" },
    { id: 7, name: "Shweta", image: shweta, member: "Senior member" },
    { id: 7, name: "Siddhant", image: siddhant, member: "Senior member" },
    { id: 7, name: "Harsha", image: harsha, member: "Senior member" },
    { id: 7, name: "Varun", image: varun, member: "Senior member" },
    { id: 7, name: "Yash", image: yash, member: "Senior member" },
    { id: 7, name: "Mohak", image: mohak, member: "Senior member" },
    { id: 7, name: "Mukul", image: mukul, member: "Senior member" },
    { id: 7, name: "Lakshya", image: lakshya, member: "Senior member" },
  ];
  const teamMembers24 = [
    { name: "Anurupa", image: Anurupa },
    { name: "Jahnavi", image: Jahnavi },
    { name: "Mollshree", image: Mollshree },
    { name: "Divya", image: Divya },
    { name: "Ispita", image: Ispita },
    { name: "Deepanshu", image: Deepanshu },
    { name: "Anirudha", image: Anirudha },
    { name: "Abhiraj", image: Abhiraj },
    { name: "Kashavi", image: Kashavi },
    { name: "Jai", image: Jai },
    { name: "Sanskar", image: Sanskar }
  
    // Add more members as needed
  ];

  return (
    <div>
      <NavbarComponent />
      <div className="mx-auto">
        <TeamSection title="Team 2023-25" teamMembers={teamMembers23} />
        <TeamSection title="Team 2024-26" teamMembers={teamMembers24} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default TeamPage;
