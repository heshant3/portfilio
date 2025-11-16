import React from "react";
import styles from "../Css/Works.module.css";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Blog Platform",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
      shortDesc: "A modern blogging platform built with React",
      fullDesc:
        "A comprehensive blogging platform featuring markdown support, responsive design, and real-time updates. Built with React and Firebase for seamless user experience.",
      link: "https://blog.heshan.dev",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      shortDesc: "Personal portfolio showcasing my work",
      fullDesc:
        "An interactive portfolio website featuring smooth animations, custom cursor effects, and a modern design approach to showcase my development skills.",
      link: "https://heshan.dev",
    },
    {
      id: 3,
      title: "E-Commerce App",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      shortDesc: "Full-stack e-commerce solution",
      fullDesc:
        "A complete e-commerce platform with shopping cart, payment integration, user authentication, and admin panel for inventory management.",
      link: "https://github.com/heshant3",
    },
    {
      id: 4,
      title: "Task Manager",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      shortDesc: "Collaborative task management tool",
      fullDesc:
        "A collaborative task management application with team features, deadline tracking, and productivity analytics.",
      link: "https://github.com/heshant3",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
      shortDesc: "Real-time weather tracking application",
      fullDesc:
        "A real-time weather dashboard with forecasts, interactive maps, and location-based weather alerts.",
      link: "https://github.com/heshant3",
    },
    {
      id: 6,
      title: "Social Network",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      shortDesc: "Modern social networking platform",
      fullDesc:
        "A modern social networking platform with real-time messaging, media sharing, and advanced privacy controls.",
      link: "https://github.com/heshant3",
    },
  ];

  const designs = [
    {
      id: 1,
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      shortDesc: "Modern interface designs",
      fullDesc:
        "Collection of modern UI/UX designs focusing on user experience, accessibility, and visual appeal across various platforms.",
      link: "https://www.behance.net/heshantharindu",
    },
    {
      id: 2,
      title: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      shortDesc: "Creative brand designs",
      fullDesc:
        "Brand identity projects including logo design, color schemes, typography, and complete brand guidelines for various clients.",
      link: "https://www.behance.net/heshantharindu",
    },
    {
      id: 3,
      title: "Mobile App Design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      shortDesc: "Mobile interface concepts",
      fullDesc:
        "Mobile application design concepts featuring intuitive navigation, modern aesthetics, and user-centered design principles.",
      link: "https://www.behance.net/heshantharindu",
    },
    {
      id: 4,
      title: "Web Design",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
      shortDesc: "Responsive web design projects",
      fullDesc:
        "Modern web design projects featuring responsive layouts, creative animations, and optimized user experiences.",
      link: "https://www.behance.net/heshantharindu",
    },
    {
      id: 5,
      title: "Logo Design",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=300&fit=crop",
      shortDesc: "Creative logo concepts",
      fullDesc:
        "Collection of creative logo designs for various brands, focusing on memorable and impactful visual identities.",
      link: "https://www.behance.net/heshantharindu",
    },
    {
      id: 6,
      title: "Typography",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      shortDesc: "Typography and lettering work",
      fullDesc:
        "Typography projects showcasing custom fonts, lettering compositions, and creative type treatments.",
      link: "https://www.behance.net/heshantharindu",
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
