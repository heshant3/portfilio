import "../Css/About.css";
import { useEffect } from "react";
import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";
import github from "react-useanimations/lib/github";
import behance from "react-useanimations/lib/behance";
import codepen from "react-useanimations/lib/codepen";
import download from "react-useanimations/lib/download";

import Img1 from "../Image/About-1.png";
import Img2 from "../Image/About-2.png";
import Img3 from "../Image/About-3.png";
import Img4 from "../Image/About-4.png";
import Img5 from "../Image/About-5.png";
import Img6 from "../Image/About-6.png";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll("section:not(.hero-section)");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="mainAbout">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="greeting">Hello there</span>
          <h1 className="hero-title">
            I'm <span className="highlight">Heshan Kalubowila</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Software Engineer</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-card">
            <p className="about-text">
              Passionate <strong>Full-Stack Developer</strong> with{" "}
              <strong>2.5+ years</strong> of experience in web and mobile
              development. Strong skills in front-end, back-end, and UI/UX
              design, backed by a <strong>BICT (Hons)</strong> degree from
              Rajarata University.
            </p>
            <p className="about-text">
              I build fast, secure, and user-friendly applications using modern
              technologies, combining clean design with solid full-stack
              engineering. A quick learner and problem-solver who uses AI tools
              to create smarter, more personalized digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-grid">
          <div className="experience-card">
            <div className="exp-year">2025 – Present</div>
            <h3 className="exp-title">Founder</h3>
            <p className="exp-company">Bedqo.com</p>
          </div>
          <div className="experience-card">
            <div className="exp-year">2025 – Present</div>
            <h3 className="exp-title">Software Engineer</h3>
            <p className="exp-company">Advice Lab</p>
          </div>

          <div className="experience-card">
            <div className="exp-year">2023 - 2024</div>
            <h3 className="exp-title">Front-End Developer</h3>
            <p className="exp-company">HELAMID LLC</p>
          </div>
          <div className="experience-card">
            <div className="exp-year">2017 - 2020</div>
            <h3 className="exp-title">Embedded System Developer</h3>
            <p className="exp-company">LIKEMART</p>
          </div>
          <div className="experience-card">
            <div className="exp-year">2018 - Present</div>
            <h3 className="exp-title">3D Modeling & UI/UX Designer</h3>
            <p className="exp-company">FREELANCE</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img1} alt="Honor Award" />
              </div>
              <div className="achievement-badge">2016</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Honor Award</h3>
              <p className="achievement-desc">
                Honor of Invention 3rd International Young Inventors Award
                Innovation Competition
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img2} alt="Grand Winner" />
              </div>
              <div className="achievement-badge">2016</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Grand Winner</h3>
              <p className="achievement-desc">
                "Innova minds" Innovation competition
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img3} alt="Gold Medal" />
              </div>
              <div className="achievement-badge">2015</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Gold Medal</h3>
              <p className="achievement-desc">
                ALL Island School innovation Competition
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img4} alt="Silver Medal" />
              </div>
              <div className="achievement-badge">2017</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Silver Medal</h3>
              <p className="achievement-desc">
                ALL Island School innovation Competition
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img5} alt="Best Inventor" />
              </div>
              <div className="achievement-badge">2016</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Best Inventor</h3>
              <p className="achievement-desc">
                The best inventor of the year in Mahinda Rajapaksha college
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-image-wrapper">
              <div className="achievement-image">
                <img src={Img6} alt="Participation" />
              </div>
              <div className="achievement-badge">2020</div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Participation</h3>
              <p className="achievement-desc">
                "COVID-19" innovation Competition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Let's Connect</h2>
          <a className="contact-email" href="mailto:hello@heshan.dev">
            hello@heshan.dev
          </a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/heshant3/">
              <UseAnimations
                animation={linkedin}
                className="download-icon"
                size={"download-icon"}
                strokeColor="#535353"
              />
            </a>
            <a href="https://github.com/heshant3">
              <UseAnimations
                animation={github}
                className="download-icon"
                size={"download-icon"}
                strokeColor="#535353"
              />
            </a>
            <a href="https://www.behance.net/heshantharindu">
              <UseAnimations
                animation={behance}
                className="download-icon"
                size={"download-icon"}
                strokeColor="#535353"
              />
            </a>
            <a href="https://codepen.io/heshant3">
              <UseAnimations
                animation={codepen}
                className="download-icon"
                size={"download-icon"}
                strokeColor="#535353"
              />
            </a>
            <a href="Heshan-CV.pdf" download="Heshan-CV.pdf">
              <UseAnimations
                className="download-icon"
                size={"download-icon"}
                animation={download}
                strokeColor="#535353"
              />
            </a>
          </div>
        </div>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Heshan Kalubowila</p>
        </footer>
      </section>
    </div>
  );
}
