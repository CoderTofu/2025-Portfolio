import "./contact.css";
import LinkIcon from "@/assets/link-svg.svg";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-slogan">
            <h2 className="font-1">
              Great things can happen with a simple{" "}
              <span className="bold">"hello!"</span>
            </h2>
          </div>
          <a className="contact-button" href="mailto:kioskpaolo@protonmail.com">
            <p className="font-3">Contact Me</p>
            <img src={LinkIcon} alt="" />
          </a>
        </div>

        {/* Socials */}
        <div className="contact-socials">
          {/* Left Part */}
          <div className="contact-info">
            <a href="#" className="font-3">
              codertofu
            </a>
            <p className="font-3">
              General Luna, corner Muralla St,
              <br /> Intramuros, Manila, 1002 Metro Manila
            </p>
            <a href="mailto:kioskpaolo@protonmail.com" className="font-3">
              kioskpaolo@protonmail.com
            </a>
          </div>
          {/* Right Part */}
          <div className="contact-links">
            <div className="contact-link">
              <a href="#" className="font-1">
                Instagram
              </a>
              <img src={LinkIcon} alt="" />
            </div>
            <div className="contact-link">
              <a href="#" className="font-1">
                LinkedIn
              </a>
              <img src={LinkIcon} alt="" />
            </div>
            <div className="contact-link">
              <a href="#" className="font-1">
                Facebook
              </a>
              <img src={LinkIcon} alt="" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-3 copyright">
          ©2025 Paolo Dionisio. ALL RIGHTS RESERVED
        </div>
      </div>

      <div className="big-text">
        <h1 className="font-2">CoderTofu</h1>
      </div>
    </section>
  );
}
