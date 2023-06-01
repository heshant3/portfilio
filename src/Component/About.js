import "../Css/About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";
import github from "react-useanimations/lib/github";
import behance from "react-useanimations/lib/behance";
import codepen from "react-useanimations/lib/codepen";
import download from "react-useanimations/lib/download";

export default function Home() {
  return (
    <div className="mainAbout">
      <div className="about">
        <h1>
          {" "}
          Hello there , <br /> I'm Heshan Tharindu{" "}
          <div className="lineSP"></div>
        </h1>

        <p>
          I am a passionate <span className="cmp"> UI/UX Engineer</span> with a
          degree in Information and Communication Technology{" "}
          <span className="cmp">(BICT(Hons))</span> from Rajarata University of
          Sri Lanka. With over <span className="cmp">2 years</span> of
          experience. <br />
          <br /> I am dedicated to continuously expanding my knowledge and
          expertise in this field. I am driven by a strong desire to create
          outstanding user experiences and am always seeking new opportunities
          for growth and learning.
        </p>
      </div>
      <div className="exp">
        <h2>Working Experience</h2>

        <h3>
          HELAMID LLC - <span>UI/UX Engineer | 2022 - Present</span>
        </h3>

        <h3>
          LIKEMART - <span>Embedded System Developer | 2017 - 2020</span>{" "}
        </h3>
        <h3>
          FREELANCE - <span>3D & UI/UX Designer | 2018 - Present</span>{" "}
        </h3>
      </div>
      <div className="achiev">
        <h2>achievemnt</h2>
        <h3>
          <span className="cmp2">Honor of Invention</span> 3rd International
          Young Inventors Award Innovation Competition. (2016)
        </h3>
        <h3>
          <span className="cmp2">Gold Prize </span> - 3rd International Young
          Inventors Award Innovation Competition. (2016)
        </h3>
        <h3>
          <span className="cmp2">Grand Winner</span> - "Innova minds" Innovation
          competition (2016)
        </h3>
        <h3>
          <span className="cmp2">Gold Medal</span> - ALL Island School
          Inventors' Competition (2015)
        </h3>
        <h3>
          <span className="cmp2">Silver Medal</span> - ALL Island School
          Inventors' Competition (2017)
        </h3>
        <h3>
          <span className="cmp2">Certificate of participation</span> " Fight
          Against COVID-19" Project (2020)
        </h3>
      </div>
      <div className="lineSP2"></div>

      <div className="btmtxt">
        <a href="mailto:hello@heshan.dev" className="email">
          {" "}
          hello@heshan.dev
        </a>

        <div className="botto">
          <p>© 2023 heshan tharindu</p>
        </div>
      </div>

      <div className="icon">
        <a on href="https://www.linkedin.com/in/heshant3/">
          <UseAnimations animation={linkedin} size={25} strokeColor="#535353" />
        </a>
        <a on href="https://github.com/heshant3">
          <UseAnimations animation={github} size={25} strokeColor="#535353" />
        </a>
        <a on href="https://www.behance.net/heshantharindu">
          <UseAnimations animation={behance} size={25} strokeColor="#535353" />
        </a>
        <a on href="https://codepen.io/heshant3">
          <UseAnimations animation={codepen} size={25} strokeColor="#535353" />
        </a>
        <a href="Heshan-CV.pdf" download="Heshan-CV.pdf">
          <UseAnimations animation={download} size={25} strokeColor="#535353" />
        </a>
      </div>
    </div>
  );
}
