import React from "react";
import "./assets/css/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DevToIcon from "./assets/images/devto-ar21.svg"
import MediumLogo from "./assets/images/medium.svg"
import StackOverflowLogo from "./assets/images/stackoverflow.svg"

export default function Section4() {
  const platforms = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/atulbhatt98/",
      icon: <LinkedInIcon />,
    },
    {
      name: "GitHub",
      url: "https://github.com/atulbhatt-system32",
      icon: <GitHubIcon />,
    },
     { name: "Dev.to",
      url: "https://github.com/atulbhatt-system32",
      icon: <img src = {DevToIcon} alt="dev.to"/>
    },
     { name: "Medium",
      url: "https://atulbhatt98.medium.com/",
      icon: <img src = {MediumLogo} alt="medium"/>
    },
     { name: "StackOverflow",
      url: "https://stackoverflow.com/users/9997978/atul-bhatt",
      icon: <img src = {StackOverflowLogo} alt="stackoverflow"/>
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mratulbhatt",
      icon: <InstagramIcon />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/atul.bhatt.560",
      icon: <FacebookIcon />,
    },
  ];
  return (
    <section className="footer">
      <h2>Let's Connect.</h2>
      <div className="findme-container">
        {platforms?.map((platform) => {
          return (
            <div className="platform-container" onClick={()=>{window.open(platform.url)}}>
              <span>{platform.icon}</span>
              {platform.name}
            </div>
          );
        })}
      </div>
      <h3>Keep Coming Back. And you'll Find Something New. That's all for Now.</h3>
    </section>
  );
}
