import React from "react";
import "./Action1.css";
const Action1 = ({ caption }) => {
  return (
    <div className="action1_container">
      <h4 className="fist_text">Just type</h4>
      <h1 className="second_text">Fastest way to navigate</h1>
      <h6>{caption}</h6>
      <div className="action1_button_container">
        <button className="type1_button">See walkthrough</button>
        <button className="type2_button">Download now</button>
      </div>
    </div>
  );
};

export default Action1;
