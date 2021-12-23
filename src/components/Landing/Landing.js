import React from "react";
import Hero from "../Hero/Hero";
import "./Landing.css";
import screen from "../../assets/images/screen.png";
import vector1 from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/Vector2.png";
import vector3 from "../../assets/images/Vector3.png";
import Action1 from "../Action1/Action1";
import Action2 from "../Action2/Action2";

const text = "Lightning fast prototyping";
const caption =
  "Most calendars are designed for teams. Slate is designed for freelancers.";
const Landing = () => {
  return (
    <div className="landing_container">
      <Hero text={text} caption={caption} />
      <img className="screen_image" src={screen} alt="screen" />
      <img className="vector1" src={vector1} alt="vector1" />
      <img className="vector2" src={vector2} alt="vector2" />
      <Action1 caption={caption} />
      <Action2 />
      <img className="vector3" src={vector2} alt="vector3" />
    </div>
  );
};

export default Landing;
