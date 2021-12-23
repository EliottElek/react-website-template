import React from "react";
import "./HamburgerIcon.css";
const HamburgerIcon = ({ open, setOpen }) => {
  return (
    <div className="hamburger_container" onClick={() => setOpen(!open)}>
      <div className="bar" id={open ? "bar1open" : "bar1"}></div>
      <div className="bar" id={open ? "bar2open" : "bar2"}></div>
      <div className="bar" id={open ? "bar3open" : "bar3"}></div>
    </div>
  );
};

export default HamburgerIcon;
