import React from "react";
import styles from "../Css/Works.module.css";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Bedqo - Hotel Booking Platform",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1763310748598/085b1fef-3a40-453b-9d45-db06bc24e03d.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      shortDesc: "Bedqo",
      fullDesc:
        "Bedqo — AI-driven full-stack platform built in 3 months, powering web & mobile hotel experiences.",
      link: "https://blog.heshan.dev/bedqo",
    },
    {
      id: 2,
      title: "AI Wireless Stethoscope",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1684138013377/efdac119-839b-4fdf-b812-cc11ee8ebd63.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      shortDesc: "Artificial Intelligence Wireless Stethoscope",
      fullDesc:
        "The human respiratory system for sound analysis and diagnosis detection using a wireless stethoscope with machine learning.",
      link: "https://blog.heshan.dev/artificial-intelligence-wireless-stethoscope",
    },
    {
      id: 3,
      title: "Modern Alcohol Detector",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710224647836/b8b84f9d-4d6f-47af-98e1-b973396f20f4.jpeg?auto=compress,format&format=webp",
      shortDesc: "Modern Alcohol Detector",
      fullDesc:
        "Developed a portable alcohol detector with LED, LCD, and printer; won national and international awards.",
      link: "https://blog.heshan.dev/modern-alcohol-detector",
    },
    {
      id: 4,
      title: "RFID Class Attended System",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1686200388885/ce84a7c9-2c2d-47c0-9259-6a63c13ae836.png?auto=compress,format&format=webp",
      shortDesc: "RFID Class Attended System",
      fullDesc:
        "Built Likemart Smart Class System using RFID, Arduino, React, PHP, and MySQL to automate attendance, payments, and communication—revolutionizing classroom management and learning efficiency.",
      link: "https://blog.heshan.dev/rfid-class-attended-system",
    },
    {
      id: 5,
      title: "Patient Management System",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710265310246/45898418-ef2e-4c44-9cbf-c335bfa73148.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      shortDesc: "Patient Management System",
      fullDesc:
        "Developed a Firebase-powered Patient Management System with React Native and web apps for sociological doctors to schedule, monitor, and manage patients in real time, enhancing care efficiency and data security.",
      link: "https://blog.heshan.dev/patient-management-system-for-sociological-doctors",
    },
    {
      id: 6,
      title: "Smart DUI Penalty System",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1710262605805/e27327ba-438c-4d79-960c-75da1920628b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
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

  return (
    <div className={styles.worksContainer}>
      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <h1 className={styles.sectionTitle}>My Projects</h1>
        <div className={styles.cardsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
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
        <h1 className={styles.sectionTitle}>My Designs</h1>
        <div className={styles.cardsGrid}>
          {designs.map((design) => (
            <div key={design.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={design.image} alt={design.title} />
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
