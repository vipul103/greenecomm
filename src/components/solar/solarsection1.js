'use client';

import React from 'react';
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
    flex: '1',
  };

  const iconStyle = {
    fontSize: '24px',
    flexShrink: 0,
  };

  const descStyle = {
    fontSize: '14px',
    marginTop: '4px',
    color: '#555',
  };

  return (
    <section style={{ padding: '40px 16px' }}>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 120px 1fr;
          align-items: center;
          gap: 40px;
          width: 100%;
          box-sizing: border-box;
        }

        .card-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card {
          display: flex;
          gap: 12px;
          align-items: center;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 16px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          flex: 1;
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .container {
            gap: 24px;
          }

          .card-column {
            gap: 16px;
          }

          .card {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>

      <div className="container">
        {/* Left Column */}
        <div className="card-column">
          <div className="card">
            <span style={iconStyle}>☀️</span>
            <div>
              <strong>Solar Panels</strong>
              <p style={descStyle}>Buy The Best Solar Panels + Solar Panel Installation</p>
            </div>
          </div>
          <div className="card">
            <span style={iconStyle}>🔋</span>
            <div>
              <strong>Solar Batteries</strong>
              <p style={descStyle}>Solar Batteries, Solar Battery Installation and Prices</p>
            </div>
          </div>
          <div className="card">
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
        <div className="card-column">
          <div className="card">
            <span style={iconStyle}>⏻</span>
            <div>
              <strong>Virtual Power Plants</strong>
              <p style={descStyle}>Learn About Virtual Power Plants (VPP) & How VPPs Work</p>
            </div>
          </div>
          <div className="card">
            <span style={iconStyle}>🔌</span>
            <div>
              <strong>EV Chargers</strong>
              <p style={descStyle}>Electric Vehicle Charger Installation & Home Charging</p>
            </div>
          </div>
          <div className="card">
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
