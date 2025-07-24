"use client";
import { useState, useCallback } from 'react';
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgPlaceholder from "@assets/img/photos/bt2.webp"; // Replace this with the actual image path
import heroBg from "@assets/img/banner/bg2.jpg";

export default function sptPage() {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setRotation({
      rotateX: (y - 0.5) * -20,
      rotateY: (x - 0.5) * 20
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);
  return (
    <Wrapper>
      <Header style_2={true} />
      <main className="bg-gray-100 min-h-screen">
        {/* Banner Section */}
        <section>
          <div
            className="hero-section"
            style={{
              backgroundImage: `url(${heroBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center text-white py-20">
              <h1 className="hero-title">SPT</h1>
              <p className="hero-description">
              Leading the way in heating innovation. SPT Heat Pumps for a Sustainable Future.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Meets Technology Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Text (8 Columns) */}
              <div className="col-lg-8">
                <h3 className="mb-3 wow fadeInUp">
                The DARK KNIGHT heat pump hot water system is specifically designed for Australia’s diverse and challenging conditions.
                </h3>
                <p className="wow fadeInUp">
                It offers rapid heating, energy efficiency, and the ability to withstand even the harshest conditions
                </p>
                <p className="wow fadeInUp">
                This system is not only reliable but also a game-changer for the Australian lifestyle, providing instant and soothing warmth across the continent.
                </p>

              </div>

              {/* Right Side - Image (4 Columns) */}
              <div className="col-lg-4 text-center">
              <div 
                  className="image-3d-container relative"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="image-3d-effect transition-transform duration-300 ease-out"
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                <Image
                  src={imgPlaceholder}
                  alt="Ecogenica Heat Pump"
                  className="img-fluid rounded shadow-lg"
                />
                 <div className="absolute inset-0 rounded-lg shadow-3d transition-opacity duration-300 opacity-20" />
                 </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Product Information Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <h3 className="text-center mb-4 font-bold">Product Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Temp Operating Range:</strong> Operates in ambient temperature ranges of -7 to +40 degrees Celsius.
              </li>
              <li>
                <strong>Auto Disinfection:</strong> Periodically heats the water beyond its set temp to prevent the growth of bacteria and legionella.
              </li>
              <li>
                <strong>Reliable Supply:</strong> Hot water whenever you need it, night or day, hail, rain, or shine.
              </li>
              <li>
                <strong>Quality Design:</strong> Featuring a Toshiba compressor and designed in Melbourne for years of trouble-free and reliable hot water.
              </li>
              <li>
                <strong>Low Operating Noise:</strong> Engineered to operate with low noise levels.
              </li>
            </ul>

            <div className="mt-5">
              <p>Ecogenica is dedicated to reducing carbon footprints and promoting greener technology. Our heat pumps provide efficient heating while minimizing environmental impact, ensuring sustainable warmth without compromise.</p>
              <p>Ecogenica aims to reduce costs and expenses for our customers. Our heat pumps are engineered to optimize energy efficiency, helping you save money on your heating bills without sacrificing comfort.</p>
              <p>Ecogenica is an Australian owned designer, wholesaler, and manufacturer of Heat Pumps. The Ecogenica Brand specialises in Heat Pump hot water upgrades and installations and is a major participant in numerous state and federal government energy savings schemes.</p>
              <p>The Ecogenica brand was launched with the sole focus on Heat Pump technology. We have a wealth of talent and experience in technology innovation, using sustainable and renewable energy to deliver hot water to homes and businesses across Australia.</p>
              <p>The Ecogenica Brand has been installed in over 200,000 homes & businesses since the launch of our first Heat Pumps in 2018. Ecogenica estimates that close to a million Australians experience hot water generated by our heat pumps every day!</p>
              <p>Our new U.K. models are A+++ rated and our EG-290FR (290lt residential unit) heat pump has the highest COP in the Australian market. It produces 5.7 KW of energy from 1KW of electricity consumed.</p>
              <p>Ecogenica also offers installation services for its customers. Ecogenica is committed to greener and healthier technology and aims to reduce costs and expenses for its customers, saving customers money every day off their power bill.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Scoped CSS */}
      <style jsx>
        {`
          .hero-section {
            color: white;
            text-align: center;
            padding: 5rem 2rem;
          }
          .hero-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </Wrapper>
  );
}
