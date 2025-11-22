import React, { useState, useEffect, useRef } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import "../Css/Achievements.css";

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const [targetScrollSpeed, setTargetScrollSpeed] = useState(0.5);
  const [isContainerDragging, setIsContainerDragging] = useState(false);
  const [containerDragStart, setContainerDragStart] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Import all images from the article folder
  const importAll = (r) => r.keys().map(r);
  const allImages = importAll(
    require.context("../Image/article", false, /\.(png|jpe?g|JPE?G|PNG)$/)
  );

  // Shuffle images for messy order - using useMemo to keep order consistent
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [images] = useState(() => shuffleArray(allImages));

  // Random sizes for messy grid - varied sizes
  const getRandomSize = (index) => {
    const sizes = [
      { width: "280px", height: "200px" },
      { width: "220px", height: "280px" },
      { width: "350px", height: "240px" },
      { width: "200px", height: "300px" },
      { width: "320px", height: "220px" },
      { width: "240px", height: "260px" },
      { width: "300px", height: "200px" },
      { width: "260px", height: "240px" },
      { width: "380px", height: "260px" },
      { width: "200px", height: "220px" },
    ];
    return sizes[index % sizes.length];
  };

  // Random rotations for messy effect
  const getRandomRotation = (index) => {
    const rotations = [-4, -3, -2, -1, 0, 1, 2, 3, 4, -5, 5];
    return rotations[index % rotations.length];
  };

  // Assign row based on index
  const getRow = (index) => {
    return index % 2; // 0 for top row, 1 for bottom row
  };

  useEffect(() => {
    // Auto-scroll animation with smooth speed transition
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;

    const animate = () => {
      // Smooth transition to target speed
      setScrollSpeed((prev) => {
        const diff = targetScrollSpeed - prev;
        return prev + diff * 0.1; // Smooth easing
      });

      scrollPositionRef.current += scrollSpeed;
      if (scrollPositionRef.current >= container.scrollWidth / 2) {
        scrollPositionRef.current = 0;
      }
      container.scrollLeft = scrollPositionRef.current;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [scrollSpeed, targetScrollSpeed]);

  // Handle mouse enter/leave for smooth pause
  const handleMouseEnterGrid = () => {
    setHoveredIndex(-1);
    setTargetScrollSpeed(0); // Smoothly stop
  };

  const handleMouseLeaveGrid = () => {
    setHoveredIndex(null);
    setTargetScrollSpeed(0.5); // Resume smoothly
  };

  // Handle horizontal scroll with mouse wheel
  const handleContainerWheel = (e) => {
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll horizontally with wheel
    const scrollAmount = e.deltaY * 2; // Multiply for faster scrolling
    scrollPositionRef.current += scrollAmount;

    // Keep within bounds
    const maxScroll = container.scrollWidth / 2;
    if (scrollPositionRef.current < 0) {
      scrollPositionRef.current = maxScroll + scrollPositionRef.current;
    } else if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = scrollPositionRef.current - maxScroll;
    }

    container.scrollLeft = scrollPositionRef.current;
  };

  // Handle container drag to scroll
  const handleContainerMouseDown = (e) => {
    // Only start drag if not clicking on an image
    if (e.target.closest(".grid-item")) return;

    setIsContainerDragging(true);
    setContainerDragStart(e.clientX);
    setTargetScrollSpeed(0); // Pause auto-scroll while dragging
  };

  const handleContainerMouseMove = (e) => {
    if (!isContainerDragging) return;

    const diff = containerDragStart - e.clientX;
    scrollPositionRef.current += diff * 1.5; // Multiply for sensitivity
    setContainerDragStart(e.clientX);

    const container = scrollContainerRef.current;
    if (!container) return;

    // Keep within bounds with seamless loop
    const maxScroll = container.scrollWidth / 2;
    if (scrollPositionRef.current < 0) {
      scrollPositionRef.current = maxScroll + scrollPositionRef.current;
    } else if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = scrollPositionRef.current - maxScroll;
    }

    container.scrollLeft = scrollPositionRef.current;
  };

  const handleContainerMouseUp = () => {
    if (isContainerDragging) {
      setIsContainerDragging(false);
      setTargetScrollSpeed(0.5); // Resume auto-scroll
    }
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.5));
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <div className="achievements-wrapper">
      {/* Header Section */}
      <div className="achievements-header">
        <h1 className="achievements-title">Highlights & Features</h1>
        <p className="achievements-subtitle">
          Articles, Mentions, and Achievements
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="messy-grid-container"
        onMouseEnter={handleMouseEnterGrid}
        onMouseLeave={handleMouseLeaveGrid}
        onWheel={handleContainerWheel}
        onMouseDown={handleContainerMouseDown}
        onMouseMove={handleContainerMouseMove}
        onMouseUp={handleContainerMouseUp}
        style={{
          cursor: isContainerDragging ? "grabbing" : "grab",
        }}
      >
        <div className="messy-grid-rows">
          {/* Row 1 */}
          <div className="messy-grid-row">
            {[...images, ...images].map((img, index) => {
              const size = getRandomSize(index);
              const rotation = getRandomRotation(index);
              const originalIndex = index % images.length;
              const row = getRow(originalIndex);

              if (row !== 0) return null;

              return (
                <div
                  key={`row1-${index}`}
                  className={`grid-item ${
                    hoveredIndex === originalIndex ? "hovered" : ""
                  }`}
                  style={{
                    width: size.width,
                    height: size.height,
                    transform: `rotate(${rotation}deg)`,
                  }}
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleImageClick(img)}
                >
                  <div className="image-wrapper">
                    <img src={img} alt={`Achievement ${originalIndex + 1}`} />
                    <div className="hover-overlay">
                      <div className="hover-text">View</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="messy-grid-row">
            {[...images, ...images].map((img, index) => {
              const size = getRandomSize(index);
              const rotation = getRandomRotation(index);
              const originalIndex = index % images.length;
              const row = getRow(originalIndex);

              if (row !== 1) return null;

              return (
                <div
                  key={`row2-${index}`}
                  className={`grid-item ${
                    hoveredIndex === originalIndex ? "hovered" : ""
                  }`}
                  style={{
                    width: size.width,
                    height: size.height,
                    transform: `rotate(${rotation}deg)`,
                  }}
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleImageClick(img)}
                >
                  <div className="image-wrapper">
                    <img src={img} alt={`Achievement ${originalIndex + 1}`} />
                    <div className="hover-overlay">
                      <div className="hover-text">View</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div className="fullscreen-modal" onClick={handleClose}>
          <div className="modal-backdrop"></div>
          <button className="close-button" onClick={handleClose}>
            <X size={24} />
          </button>

          <div className="zoom-controls">
            <button
              className="zoom-button"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
            >
              <ZoomOut size={20} />
            </button>
            <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
            <button
              className="zoom-button"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
            >
              <ZoomIn size={20} />
            </button>
          </div>

          <div
            className="image-container"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            style={{
              cursor:
                zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
          >
            <img
              src={selectedImage}
              alt="Achievement"
              style={{
                transform: `scale(${zoomLevel}) translate(${
                  position.x / zoomLevel
                }px, ${position.y / zoomLevel}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
