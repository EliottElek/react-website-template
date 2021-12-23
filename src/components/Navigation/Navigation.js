import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HambugerIcon/HamburgerIcon";
import "./Navigation.css";
const Navigation = ({ links, logo, size }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (size.x >= 700) setOpen(false);
  }, [size.x, setOpen]);

  const MobileNavigation = () => (
    <div
      className={
        open
          ? "mobile_navigation_container"
          : "mobile_navigation_container hidden"
      }
    >
      <ul className="mobile_links_list">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button className="login_button">
          Login
        </button>
    </div>
  );
  return (
    <>
      <nav className="main_navigation">
        <Link to="/">
          <img src={logo} alt="logo" className="logo_navigation" />
        </Link>
        <ul className="links_list">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="login_button" id="nav_login">
          Login
        </button>
        <HamburgerIcon open={open} setOpen={setOpen} />
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
