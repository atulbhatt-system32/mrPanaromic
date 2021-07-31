import React from "react";
import Section1 from "../../components/Body/Sections/Section1/Section1"
import Section2 from "../../components/Body/Sections/Section2/Section2"
import Section3 from "../../components/Body/Sections/Section3/Section3"
import Section4 from "../../components/Body/Sections/Section4/Section4"
import Footer from "../../components/Body/Sections/Footer/Footer"
import "./assets/css/body.css";


export default function Body() {
  
  return (
    <div className="body">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}
