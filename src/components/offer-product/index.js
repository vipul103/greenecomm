"use client";
import Image from "next/image";
import img1 from "@assets/img/photos/heat.jpg";
import img2 from "@assets/img/photos/14.webp";
import img3 from "@assets/img/photos/solarcover.jpg";
import React, { useState, forwardRef } from "react";
import Link from "next/link";

const SquareImages = forwardRef((props, ref) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section ref={ref} className="offer-section">
    <div className="flex-container">
      {/* Image 1 */}
      <div
        className={`image-wrapper ${hovered === "img1" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img1")}
        onMouseLeave={handleMouseLeave}
      >
        <Link href = "/hotwater">
        <Image src={img1} alt="Hot Water Rebate" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Hot Water Rebate</h2>
            <p>UP TO 70% LESS ENERGY</p>
          </div>
        </div>
        </Link>
      </div>

      {/* Image 2 */}
      <div
        className={`image-wrapper ${hovered === "img2" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img2")}
        onMouseLeave={handleMouseLeave}
      >
        <Link href = "/ac">
        <Image src={img2} alt="Aircon Rebate" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Aircon Rebate</h2>
            <p>GOVERNMENT INITIATIVE</p>
          </div>
        </div>
        </Link>
      </div>

      {/* Image 3 */}
      <div
        className={`image-wrapper ${hovered === "img3" ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter("img3")}
        onMouseLeave={handleMouseLeave}
      >
        <Link href = "/solar-panel">
        <Image src={img3} alt="Contact Us" layout="fill" objectFit="cover" />
        <div className="overlay">
          <div className="text">
            <h2>Solar Panel</h2>
            <p>REDUCE YOUR ELECTRICITY BILLS</p>
          </div>
        </div>
        </Link>
      </div>

      <style jsx>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          height: auto;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 50vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          filter: grayscale(80%);
        }

        .image-wrapper:hover,
        .image-wrapper.hovered {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          filter: grayscale(0%);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .image-wrapper:hover .overlay,
        .image-wrapper.hovered .overlay {
          opacity: 1;
        }

        .text {
          text-align: center;
        }

        .text h2 {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          color: #ffffff;
        }

        .text p {
          margin: 8px 0 0;
          font-size: 14px;
          color: #ffffff;
        }

        @media (min-width: 768px) {
          .flex-container {
            flex-direction: row;
          }
          .image-wrapper {
            width: 33.33%;
          }
        }
      `}</style>
    </div>
    </section>
  );
});
SquareImages.displayName = "SquareImages";

export default SquareImages;









