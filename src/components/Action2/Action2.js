import React from "react";
import "./Action2.css";
import screen from "../../assets/images/screen2.png";
import screen2 from "../../assets/images/screen3.png";

const Action2 = () => {
  return (
    <>
      <div className="grid_action_container">
        <div>
          <h2>OpenType features</h2>
          <button className="type2_button">Learn more</button>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers.
          </p>
        </div>
        <img src={screen2} alt="" />
      </div>
      <div className="grid_action_container second">
        <img src={screen} alt="" />
        <div>
          <h2>OpenType features</h2>
          <button className="type2_button">Learn more</button>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Action2;
