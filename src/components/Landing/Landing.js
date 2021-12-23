import React from "react";
import Hero from "../Hero/Hero";
import "./Landing.css";
import screen from "../../assets/images/screen.png";
import vector1 from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/Vector2.png";

const text = "Lightning fast prototyping";
const caption =
  "Most calendars are designed for teams. Slate is designed for freelancers.";
const Landing = () => {
  return (
    <div className="landing_container">
      <Hero text={text} caption={caption} />
      <img className="screen_image" src={screen} alt="screen" />
      <img className = 'vector1' src={vector1} alt="vector1" />
      <img className = 'vector2' src={vector2} alt="vector2" />
    </div>
  );
};

export default Landing;
