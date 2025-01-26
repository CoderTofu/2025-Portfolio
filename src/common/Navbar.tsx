import "./navbar.css";

import Icon from "@/assets/my-icon.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="site-brand">
          <img className="site-icon" src={Icon} alt="CoderTofu Icon" />
          <h1 className="site-name font-1">codertofu.</h1>
        </div>
        <div className="site-links font-1">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
