import "../Css/About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/Developer.json";
import animationData2 from "../Lotties/Works-1.json";
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
    const timeline = gsap.timeline();

    timeline
      .from(".txt", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".lottie1", {
        x: -55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".abtxt", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    {
      /* ////////////  Experience    /////////////////// */
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".exp",
          start: "top center",
          end: "bottom center",

          // markers: true,
        },
      })
      .from(".exp1", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".ani", {
        x: 25,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".exp2", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".exp3", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".exp4", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      });
    {
      /* ////////////  Achievements    /////////////////// */
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".achiev",
          start: "top center",
          end: "bottom center",

          // markers: true,
        },
      })
      .from(".achtxt", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi1", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi2", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi3", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi4", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi5", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".achi6", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      });
    {
      /* ////////////  Bottom text    /////////////////// */
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".btmtxt",
          start: "40% 80%",
          end: "80% 100%",
          // markers: true,
        },
      })

      .from(".emailtxt", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".icon", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      })

      .from(".botto", {
        y: 55,
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  const works = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div className="mainAbout">
      <h1 className="txt">
        {" "}
        Hello there , <br />{" "}
        <span className="maintxt">I'm Heshan Tharindu</span>{" "}
      </h1>
      <div className="about">
        <div className="aboutiteam lottie1">
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </div>
        <div className="aboutiteam content">
          <p className="abtxt">
            I am a passionate <span className="cmp"> Front-End Developer</span>{" "}
            with a degree in Information and Communication Technology{" "}
            <span className="cmp">(BICT(Hons))</span> from Rajarata University
            of Sri Lanka, backed by over <span className="cmp">1 year</span> of
            experience. <br />
            <br /> I am dedicated to continuously expanding my knowledge and
            expertise in UI/UX design, with a strong focus on creating
            outstanding user experiences. I actively utilize AI tools and
            methodologies to develop innovative UI/UX solutions that optimize
            interactions and deliver personalized experiences.
          </p>
        </div>
      </div>

      {/* ////////////  Experience    /////////////////// */}

      <div className="exp ">
        <h2 className="exp1">Working Experience</h2>
        <div className="expwaper">
          <div className="expitem ">
            <h3 className="exp2">
              HELAMID LLC - <span>Front-End Developer | 2023 - Present</span>
            </h3>

            <h3 className="exp3">
              LIKEMART - <span>Embedded System Developer | 2017 - 2020</span>{" "}
            </h3>
            <h3 className="exp4">
              FREELANCE -{" "}
              <span>3D Modeling & UI/UX Designer | 2018 - Present</span>{" "}
            </h3>
          </div>

          <div className="expitem ani">
            <Lottie options={works} isClickToPauseDisabled={true} />
          </div>
        </div>
      </div>

      {/* ////////////  Achievements    /////////////////// */}

      <div className="achiev">
        <h2 className="achtxt">Achievements</h2>

        <div className="grid">
          <figure class="effect-lily achi1">
            <img src={Img1} alt=" Achievements-1" />
            <figcaption>
              <div>
                <h2>Honor Award</h2>
                <p>
                  Honor of Invention 3rd International Young Inventors Award
                  Innovation Competition - 2016
                </p>
              </div>
            </figcaption>
          </figure>
          <figure class="effect-lily achi2">
            <img src={Img2} alt=" Achievements-2" />
            <figcaption>
              <div>
                <h2>Grand Winner</h2>
                <p>"Innova minds" Innovation competition - 2016</p>
              </div>
            </figcaption>
          </figure>

          <figure class="effect-lily achi3">
            <img src={Img3} alt=" Achievements-3" />
            <figcaption>
              <div>
                <h2>Gold Medal </h2>
                <p>ALL Island School innovation Competition - 2015</p>
              </div>
            </figcaption>
          </figure>

          <figure class="effect-lily achi4">
            <img src={Img4} alt=" Achievements-4" />
            <figcaption>
              <div>
                <h2>Silver Medal </h2>
                <p>ALL Island School innovation Competition - 2017</p>
              </div>
            </figcaption>
          </figure>

          <figure class="effect-lily achi5">
            <img src={Img5} alt=" Achievements-6" />
            <figcaption>
              <div>
                <h2>Best Inventor</h2>
                <p>
                  "The best inventor of the year in Mahinda Rajapaksha college -
                  2016
                </p>
              </div>
            </figcaption>
          </figure>

          <figure class="effect-lily achi6">
            <img src={Img6} alt=" Achievements-6" />
            <figcaption>
              <div>
                <h2>Participation</h2>
                <p>"COVID-19" innovation Competition - 2020</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ////////////  Bottom text    /////////////////// */}
      <div className="btmtxt">
        <a
          className="underline-animation emailtxt"
          href="mailto:hello@heshan.dev"
        >
          {" "}
          hello@heshan.dev
        </a>
        <div className="icon">
          <a on href="https://www.linkedin.com/in/heshant3/">
            <UseAnimations
              animation={linkedin}
              className="download-icon"
              size={"download-icon"}
              strokeColor="#535353"
            />
          </a>
          <a on href="https://github.com/heshant3">
            <UseAnimations
              animation={github}
              className="download-icon"
              size={"download-icon"}
              strokeColor="#535353"
            />
          </a>
          <a on href="https://www.behance.net/heshantharindu">
            <UseAnimations
              animation={behance}
              className="download-icon"
              size={"download-icon"}
              strokeColor="#535353"
            />
          </a>
          <a on href="https://codepen.io/heshant3">
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
        <div className="botto">
          <p>© {new Date().getFullYear()} Heshan Tharindu</p>
        </div>
      </div>
    </div>
  );
}
