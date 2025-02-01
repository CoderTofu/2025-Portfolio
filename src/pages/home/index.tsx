import "./index.css";
import Navbar from "@/common/Navbar/Navbar.tsx";

import LandingSection from "./landing/landing.tsx";
import AboutSection from "./about/about.tsx";
import ContactSection from "./contact/contact.tsx";

function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default Home;
