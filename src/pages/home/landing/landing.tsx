import "./landing.css";
import LandingImage from "@/assets/me-nobg.svg";

function LandingSection() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="scroll">
          <div className="RightToLeft">
            <p className="font-2">Hello, I'm Juan Paolo B. Dionisio!</p>
            <p className="font-2">A Learner.</p>
            <p className="font-2">A Developer.</p>
            <p className="font-2">A Creator.</p>
          </div>
        </div>
      </div>

      <img className="landing-img" src={LandingImage} alt="Landing Image" />
    </section>
  );
}

export default LandingSection;
