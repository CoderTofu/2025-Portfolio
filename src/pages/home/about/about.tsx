import "./about.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-divider"></div>
      <main className="about-content">
        <div className="about-header">
          <h1 className="font-1">About</h1>
        </div>
        <div className="about-body">
          {/* Left Side */}
          <div className="left-side sides">
            <div className="font-1">
              Constantly exploring new technologies and ideas, both in web
              development and beyond. Let’s build something amazing together!
            </div>
            <div className="titles font-3">
              <div>
                <p>
                  Front-End Developer <br /> & CS Student
                </p>
              </div>
              <div>
                <a href="#">Explore LinkedIn</a>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="right-side sides">
            <p className="font-3">
              I am a 3rd-year Computer Science student at Pamantasan ng Lungsod
              ng Maynila, specializing in frontend web development. <br />
              <br />
              As a team leader, I have successfully led multiple academic
              projects, demonstrating strong leadership and collaboration
              skills. I also have experience as a volunteer technical director
              for major school events, showcasing my ability to handle
              high-pressure tasks. <br /> <br />
              Currently, I am seeking an internship opportunity to further
              enhance my skills and contribute to impactful projects.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
