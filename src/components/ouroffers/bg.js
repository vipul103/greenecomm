// import React from "react";
// // internal
// import bg from '@assets/img/contact/contact-bg.png';

// const TopBar = ({title,subtitle}) => {
//   return (
//     <section className="tp-section-area p-relative z-index-1 tp-section-spacing">
//       <div
//         className="tp-section-bg include-bg"
//         style={{backgroundImage:`url(${bg.src})`}}
//       ></div>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-8">
//             <div className="tp-section-wrapper-2 text-center">
//               <span className="tp-section-subtitle-2 subtitle-mb-9">
//                 {title}
//               </span>
//               <h3 className="tp-section-title-2 font-70">
//                 {subtitle}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopBar;
// app/offers/page.js or pages/offers.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import heroBg from '@assets/img/banner/bg2.jpg';

export default function SolarPlansPage() {
  return (
    <main className="main-content">
      <style jsx>{`
        .main-content {
          font-family: sans-serif;
        }

        .hero-section {
          background-image: url(${heroBg.src});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          padding: 4rem 2rem;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .highlight {
          color: #fde047;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .product-section {
          padding-top: 80px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .offer-item {
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
        }

        .offer-icon {
          margin-right: 10px;
          margin-top: 3px;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .phone-btn, .email-btn, .website-btn {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-align: center;
          text-decoration: none;
          width: 100%;
          max-width: 300px;
        }

        .phone-btn:hover, .email-btn:hover, .website-btn:hover {
          background: #1d4ed8;
        }

        .offer-heading {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Our <br />
            <span className="highlight">Offers</span>
          </h1>
        </div>
      </section>

      {/* Poster 1 Section */}
     {/* Poster 1 Section - Solar Battery Offer with Video */}
<section className="product-section">
  <div className="container product-grid">
    <video
      src="/assets/img/icon/Video 2.mp4" // Make sure this video exists in your public folder
      controls
      width="100%"
      style={{
        borderRadius: '8px',
        maxWidth: '500px',
        height: 'auto',
      }}
    >
      Your browser does not support the video tag.
    </video>

    <div>
      <h3 className="offer-heading">🔋 Switch to Solar Batteries Under the VEU Program</h3>
      <p className="mb-6 text-lg">
        Take control of your energy use with solar battery storage. Save energy during the day and use it at night to reduce your bills and your carbon footprint.
      </p>

      <div className="mb-6">
        <div className="offer-item">
          <span className="offer-icon">✅</span>
          <span>Government rebates available</span>
        </div>
        <div className="offer-item">
          <span className="offer-icon">✅</span>
          <span>Backup power during blackouts</span>
        </div>
        <div className="offer-item">
          <span className="offer-icon">✅</span>
          <span>Maximize your solar investment</span>
        </div>
      </div>

      <div className="cta-buttons">
        <a href="tel:1300785436" className="phone-btn">📞 1300 785 436</a>
        <a href="https://greenenergypowerco.com" className="website-btn">🌐 greenenergypowerco.com</a>
        <a href="mailto:contact@greenenergypowerco.com" className="email-btn">📩 contact@greenenergypowerco.com</a>
      </div>
    </div>
  </div>
</section>
  <section className="product-section pb-10">
        <div className="container product-grid">
          <div>
            <h3 className="offer-heading">🔄 Switch to a modern reverse cycle air conditioning system!</h3>
            <p className="mb-6 text-lg">
              Make your home more efficient and comfortable while claiming up to $7000 in rebates under the VEU program. Enjoy year-round temperature control.
            </p>
            
            <div className="mb-6">
              <div className="offer-item">
                <span className="offer-icon">💲</span>
                <span>Affordable at $659 per unit</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">💸</span>
                <span>Massive government rebates</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">🧑‍🔧</span>
                <span>Hassle-free installation</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:1300785436" className="phone-btn">📞 1300 785 436</a>
              <a href="mailto:support@greenenergypowerco.com" className="email-btn">💌 support@greenenergypowerco.com</a>
              <a href="https://greenenergypowerco.com" className="website-btn">🌐 greenenergypowerco.com</a>
            </div>
          </div>
          <video
      src="/assets/img/icon/AC Video.mp4" // Make sure this video exists in your public folder
      controls
      width="100%"
      style={{
        borderRadius: '8px',
        maxWidth: '500px',
        height: 'auto',
      }}
    >
      Your browser does not support the video tag.
    </video>
        </div>
      </section>


      {/* Poster 2 Section */}
      <section className="product-section">
        <div className="container product-grid">
          <div>
            <h3 className="offer-heading">🔥 Looking to Replace Your Old Gas Heater?</h3>
            <p className="mb-6 text-lg">
              Upgrade to a modern reverse cycle air conditioning system under the VEU rebate program. It's not only better for your comfort, but also for your wallet.
            </p>
            
            <div className="mb-6">
              <div className="offer-item">
                <span className="offer-icon">✅</span>
                <span>Get up to $7000 in rebates</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">✅</span>
                <span>Brands: Midea, Rinnai</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">✅</span>
                <span>Reliable performance & energy savings</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:1300785436" className="phone-btn">📞 1300 785 436</a>
              <a href="mailto:support@greenenergypowerco.com" className="email-btn">💌 support@greenenergypowerco.com</a>
              <button className="website-btn">📅 Book your home assessment today</button>
            </div>
          </div>
          <Image
            src="/assets/img/offers/offe2.png"
            alt="Gas heater replacement"
            width={500}
            height={400}
            className="rounded"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />
        </div>
      </section>

      {/* Poster 3 Section */}
      <section className="product-section">
        <div className="container product-grid">
          <Image
            src="/assets/img/offers/offe3.png"
            alt="Energy-efficient air conditioner"
            width={500}
            height={400}
            className="rounded"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />
          <div>
            <h3 className="offer-heading">🛋️ Upgrade to an ENERGY-EFFICIENT AIR CONDITIONER TODAY!</h3>
            <p className="mb-6 text-lg">
              Say goodbye to outdated gas-ducted heating. With Victorian Energy Upgrades, you can save big and stay cool with a trusted system from Rinnai or Midea.
            </p>
            
            <div className="mb-6">
              <div className="offer-item">
                <span className="offer-icon">💲</span>
                <span>$659 per unit</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">🏠</span>
                <span>Perfect for families and renters</span>
              </div>
              <div className="offer-item">
                <span className="offer-icon">⚡</span>
                <span>Efficient AC = Lower energy bills</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:1300785436" className="phone-btn">📞 1300 785 436</a>
              <a href="mailto:support@greenenergypowerco.com" className="email-btn">💌 support@greenenergypowerco.com</a>
              <button className="website-btn">✅ Book Your Quote Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Poster 4 Section */}
    </main>
  );
}