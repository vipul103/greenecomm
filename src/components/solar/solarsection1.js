'use client';

import React from 'react';
import Image from 'next/image';
import InfinityLogo from '@components/infinitylogo';

const Solarsection1 = () => {
  const cardStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const iconStyle = {
    fontSize: '24px',
  };

  const descStyle = {
    fontSize: '14px',
    marginTop: '4px',
    color: '#555',
  };

  return (
    <section style={{ padding: '80px 20px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 120px 1fr',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={cardStyle}>
            <span style={iconStyle}>☀️</span>
            <div>
              <strong>Solar Panels</strong>
              <p style={descStyle}>Buy The Best Solar Panels + Solar Panel Installation</p>
            </div>
          </div>
          <div style={cardStyle}>
            <span style={iconStyle}>🔋</span>
            <div>
              <strong>Solar Batteries</strong>
              <p style={descStyle}>Solar Batteries, Solar Battery Installation and Prices</p>
            </div>
          </div>
          <div style={cardStyle}>
            <span style={iconStyle}>🏢</span>
            <div>
              <strong>Commercial Solar</strong>
              <p style={descStyle}>Commercial Solar Panels & Installation</p>
            </div>
          </div>
        </div>

        {/* Center Logo */}
       <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InfinityLogo />
</div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={cardStyle}>
            <span style={iconStyle}>⏻</span>
            <div>
              <strong>Virtual Power Plants</strong>
              <p style={descStyle}>Learn About Virtual Power Plants (VPP) & How VPPs Work</p>
            </div>
          </div>
          <div style={cardStyle}>
            <span style={iconStyle}>🔌</span>
            <div>
              <strong>EV Chargers</strong>
              <p style={descStyle}>Electric Vehicle Charger Installation & Home Charging</p>
            </div>
          </div>
          <div style={cardStyle}>
            <span style={iconStyle}>🌡️</span>
            <div>
              <strong>Heat Pumps</strong>
              <p style={descStyle}>Energy Efficient Heat Pumps for Hot Water</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solarsection1;
