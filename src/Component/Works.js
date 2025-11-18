import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../Css/Works.module.css";

gsap.registerPlugin(ScrollTrigger);

// Image component with skeleton loading
const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={styles.imageWrapper}>
      {!loaded && !error && <div className={styles.skeleton} />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0 }}
        className={styles.image}
      />
    </div>
  );
};

const Works = () => {
  const projectsRef = useRef([]);
  const designsRef = useRef([]);
  const projectsTitleRef = useRef(null);
  const designsTitleRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Bedqo - Hotel Booking Platform",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/b8c8c6238819331.691c818b8a747.png",
      shortDesc: "Bedqo",
      fullDesc:
        "Bedqo — AI-driven full-stack platform built in 3 months, powering web & mobile hotel experiences.",
      link: "https://blog.heshan.dev/bedqo",
    },
    {
      id: 2,
      title: "AI Wireless Stethoscope",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ea0910156442979.63678489dafe1.gif",
      shortDesc: "Artificial Intelligence Wireless Stethoscope",
      fullDesc:
        "The human respiratory system for sound analysis and diagnosis detection using a wireless stethoscope with machine learning.",
      link: "https://blog.heshan.dev/artificial-intelligence-wireless-stethoscope",
    },
    {
      id: 3,
      title: "Modern Alcohol Detector",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d2e86101257973.5f1a94405270b.jpg",
      shortDesc: "Modern Alcohol Detector",
      fullDesc:
        "Developed a portable alcohol detector with LED, LCD, and printer; won national and international awards.",
      link: "https://blog.heshan.dev/modern-alcohol-detector",
    },
    {
      id: 4,
      title: "RFID Class Attended System",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f54e5101257545.5f1a91e853c8b.jpg",
      shortDesc: "RFID Class Attended System",
      fullDesc:
        "Built Likemart Smart Class System using RFID, Arduino, React, PHP, and MySQL to automate attendance, payments, and communication—revolutionizing classroom management and learning efficiency.",
      link: "https://blog.heshan.dev/rfid-class-attended-system",
    },
    {
      id: 5,
      title: "Patient Management System",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/077c96213371683.6745806d47b4b.png",
      shortDesc: "Patient Management System",
      fullDesc:
        "Developed a Firebase-powered Patient Management System with React Native and web apps for sociological doctors to schedule, monitor, and manage patients in real time, enhancing care efficiency and data security.",
      link: "https://blog.heshan.dev/patient-management-system-for-sociological-doctors",
    },
    {
      id: 6,
      title: "Smart DUI Penalty System",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/17adf8192367033.65dacfe4d68ba.jpg",
      shortDesc: "Smart DUI Penalty System",
      fullDesc:
        "Developed a Smart Driving Under the Influence (DUI) Penalty System using IoT, React Native, and Firebase to detect alcohol levels, scan driver QR codes, and record penalties in real time—enhancing road safety and drunk driving enforcement in Sri Lanka.",
      link: "https://blog.heshan.dev/smart-dui-penalty-system",
    },
  ];

  const designs = [
    {
      id: 1,
      title: "Bus Minder App ",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f93084191811851.65d22473e87b9.png",
      shortDesc: "Bus Minder Mobile App UI",
      fullDesc: "Bus Booking Mobile app UI Design with APP design",
      link: "https://www.behance.net/gallery/191811851/Bus-Minder-IOT-Mobile-App",
    },
    {
      id: 2,
      title: "ICart App",
      image:
        "https://mir-cdn.behance.net/v1/rendition/project_modules/max_632_webp/48b4ec213363445.6745620e7a495.png",
      shortDesc: "ICart App UI",
      fullDesc: "ICart app is a Sri Lankan supermarket self-checkout app.",
      link: "https://www.behance.net/gallery/213363445/ICart-APP",
    },
    {
      id: 3,
      title: "Eco Tracker App",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0c79f2191809827.65d21ccda2678.png",
      shortDesc: "Green House App UI",
      fullDesc: "Greenhouse IoT mobile app UI design",
      link: "https://www.behance.net/gallery/191809827/Green-House-IOT-App",
    },
    {
      id: 4,
      title: "Supplement Bottle",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/86d2da176927793.Y3JvcCwxODQyLDE0NDEsNDEsMA.png",
      shortDesc: "Supplement Bottle",
      fullDesc: "Realistic Supplement Bottle 3D model and rendering.",
      link: "https://www.behance.net/gallery/176927793/Supplement-Bottle-mock-up",
    },
    {
      id: 5,
      title: "Coffee machine",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/180b25176712711.64c9b822d0784.png",
      shortDesc: "Creative logo concepts",
      fullDesc: "Realistic Coffee Machine 3D Modeling and Rendering.",
      link: "https://www.behance.net/gallery/176712711/Realistic-Coffee-machine-rendering",
    },
    {
      id: 6,
      title: "Rajarata University Of Sri Lanka",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/60714d151711345.6310b02ae9372.jpg",
      shortDesc: "Rajarata University Of Sri Lanka",
      fullDesc:
        "Rajarata University of Sri Lanka Main Building 2D Illustration Design.",
      link: "https://www.behance.net/gallery/151711345/Rajarata-University-Of-Sri-Lanka",
    },
  ];

  useEffect(() => {
    // Animate section titles
    if (projectsTitleRef.current) {
      gsap.from(projectsTitleRef.current, {
        scrollTrigger: {
          trigger: projectsTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (designsTitleRef.current) {
      gsap.from(designsTitleRef.current, {
        scrollTrigger: {
          trigger: designsTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Animate project cards
    projectsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      }
    });

    // Animate design cards
    designsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.worksContainer}>
      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <h1 ref={projectsTitleRef} className={styles.sectionTitle}>
          My Projects
        </h1>
        <div className={styles.cardsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <ImageWithSkeleton src={project.image} alt={project.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.fullDesc}</p>
                <div className={styles.cardActions}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitBtn}
                  >
                    Visit Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.seeMoreContainer}>
          <a
            href="https://blog.heshan.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.seeMoreBtn}
          >
            See More Projects on Blog
          </a>
        </div>
      </section>

      {/* Designs Section */}
      <section className={styles.designsSection}>
        <h1 ref={designsTitleRef} className={styles.sectionTitle}>
          My Designs
        </h1>
        <div className={styles.cardsGrid}>
          {designs.map((design, index) => (
            <div
              key={design.id}
              ref={(el) => (designsRef.current[index] = el)}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <ImageWithSkeleton src={design.image} alt={design.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{design.title}</h3>
                <p className={styles.cardDescription}>{design.fullDesc}</p>
                <div className={styles.cardActions}>
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitBtn}
                  >
                    View on Behance →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.seeMoreContainer}>
          <a
            href="https://www.behance.net/heshantharindu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.seeMoreBtn}
          >
            See More Designs on Behance
          </a>
        </div>
      </section>
    </div>
  );
};

export default Works;
