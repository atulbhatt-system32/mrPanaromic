import React from "react";
import Section1 from "../../components/Body/Sections/Section1/Section1"
import Section2 from "../../components/Body/Sections/Section2/Section2"
import "./assets/css/body.css";


export default function Body() {
  
  return (
    <div className="body">
      <Section1/>
      <Section2/>
    </div>
  );
}
