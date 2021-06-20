import React from "react";
import Section1 from "../../components/Body/Sections/Section1/Section1"
import Section2 from "../../components/Body/Sections/Section2/Section2"
import Section3 from "../../components/Body/Sections/Section3/Section3"
import "./assets/css/body.css";

import ReactPageScroller from 'react-page-scroller'

export default function Body() {
  
  return (
    <div className="body">
    <ReactPageScroller containerHeight="100vh">
      <Section1/>
      <Section2/>
      <Section3/>
      </ReactPageScroller>
    </div>
  );
}
