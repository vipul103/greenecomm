'use client';

import React from 'react';
import Image from 'next/image';

const SolarVPPSection = () => {
  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '80px 20px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '40px',
  };

  const smallHeadingStyle = {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '18px',
    color: '#000',
    marginBottom: '60px',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 700,
    color: '#050505ff',
    marginBottom: '24px',
    lineHeight: 1.3,
  };

  const textStyle = {
    fontSize: '16px',
    color: '#333',
    lineHeight: 1.6,
    marginBottom: '16px',
  };

  const linkStyle = {
    fontSize: '16px',
    color: '#0c0c0cff',
    fontWeight: 600,
    textDecoration: 'none',
  };

  return (
    <section style={sectionStyle}>
      <h3 style={smallHeadingStyle}>
        join the solar family now
      </h3>
      <div style={containerStyle}>
        {/* Left Side */}
        <div>
          <h2 style={titleStyle}>
            Connect your home with solar battery
          </h2>
          <p style={textStyle}>
            inquire with us now and enjoy <strong>goverment rebate</strong>, now’s a great time to join our
            network of connected home solar and battery systems.
          </p>
          <a href="#" style={linkStyle}>
            See deal &nbsp;›
          </a>
        </div>

        {/* Right Side */}
        <div style={{ textAlign: 'center' }}>
          <Image
            src="/assets/img/shape/home.png" // replace with your actual image path
            alt="Virtual Power Plant Illustration"
            width={400}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolarVPPSection;
