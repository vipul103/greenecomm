'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import heroBg from '@assets/img/slider/banner7.png';
import Solarsection1 from "@components/solar/solarsection1";
import Solarsection2 from "@components/solar/solarsection2";
import Solarsection3 from "@components/solar/solarsection3";

export default function SolarPlansPage() {
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layoutStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '500px',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    marginBottom: '1rem',
    fontWeight: 500,
  };

  const listStyle = {
    listStyle: 'decimal inside',
    lineHeight: '1.8',
  };

const plans = [
  {
    size: '6.6kW',
    tag: "PEOPLE'S CHOICE",
    system: '+$3679',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$969',
    gradient: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
    textColor: 'white',
  },
  {
    size: '10.12kW',
    tag: 'RECOMMENDED PACKAGE',
    system: '+$5799',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$4,240',
    gradient: 'linear-gradient(to right, #6b21a8, #c084fc)',
    textColor: 'white',
  },
  {
    size: '13.2kW',
    tag: 'PREMIUM SOLAR PACKAGE',
    system: '+$7299',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$5,099',
    gradient: 'linear-gradient(to right, #facc15, #fde047)',
    textColor: 'black',
  },
];


  return (
    <main style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          textAlign: 'center',
          padding: '4rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Revolutionize Your Home <br />
            <span style={{ color: '#000000ff' }}>Solar Panel and battery</span>
          </h1>
          <p style={{ color: '#fd0303ff',fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Upgrade to modern, energy-efficient Solar Panel and battery. Save on bills while
            enjoying superior performance with government rebates.
          </p>
        </div>
      </section>

      {/* Why Solar Section */}
  
        <section style={{ paddingTop: '80px' }}>
        <div style={layoutStyle}>
          <Image
            src="/assets/img/photos/alfha.jpg"
            alt="Solar Panels"
            width={500}
            height={400}
            style={imageStyle}
          />
          <div>
            <h3 style={headingStyle}>
              Why Install Solar Panels Under the Victorian Energy Upgrade Program?
            </h3>
            <p style={paragraphStyle}>
              1. <strong>Significant Cost Savings:</strong><br />
              Get rebates, reduce upfront costs, and start saving from day one.
            </p>
            <p style={paragraphStyle}>
              2. <strong>Environmental Impact:</strong><br />
              Cut down on fossil fuels and your carbon footprint.
            </p>
            <p style={paragraphStyle}>
              3. <strong>Increased Home Value:</strong><br />
              A solar-powered home is an investment and attracts buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Installation Process */}
      <section style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={layoutStyle}>
          <div>
            <h3 style={headingStyle}>Process to Install Solar Panels</h3>
            <ol style={listStyle}>
              <li><strong>Eligibility Check:</strong> Confirm if your property qualifies.</li>
              <li><strong>Site Assessment:</strong> Schedule a consultation and system design.</li>
              <li><strong>Quote and Rebate:</strong> Review costs and apply rebates.</li>
              <li><strong>Installation:</strong> Licensed experts install your system.</li>
              <li><strong>Inspection & Grid Connection:</strong> Final safety checks and connection.</li>
              <li><strong>Handover:</strong> Receive all documentation and manuals.</li>
              <li><strong>Monitor & Maintain:</strong> Track performance and schedule maintenance.</li>
            </ol>
          </div>
          <Image
            src="/assets/img/photos/solar_image1.png"
            alt="Process"
            width={500}
            height={400}
            style={imageStyle}
          />
        </div>
      </section>

      {/* Section 3 - Solar Batteries */}
      <section style={{ paddingTop: '80px' }}>
        <div style={layoutStyle}>
          <Image
            src="/assets/img/photos/growattbattery.png"
            alt="Solar Batteries"
            width={500}
            height={400}
            style={imageStyle}
          />
          <div>
            <h3 style={headingStyle}>
              Why Install Solar Batteries Under the Victorian Energy Upgrade Program?
            </h3>
            <p style={paragraphStyle}>
              1. <strong>Energy Independence:</strong><br />
              Store solar energy and reduce reliance on the grid.
            </p>
            <p style={paragraphStyle}>
              2. <strong>Lower Energy Bills:</strong><br />
              Use stored energy during peak times and avoid high tariffs.
            </p>
            <p style={paragraphStyle}>
              3. <strong>Backup During Outages:</strong><br />
              Ensure uninterrupted power supply during blackouts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Battery Installation */}
      <section style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={layoutStyle}>
          <div>
            <h3 style={headingStyle}>Process to Install Solar Batteries</h3>
            <ol style={listStyle}>
              <li><strong>Eligibility Assessment:</strong> Check battery compatibility with your solar system.</li>
              <li><strong>Site Inspection:</strong> Evaluate property and battery placement.</li>
              <li><strong>Rebate Application:</strong> Apply for available battery rebates.</li>
              <li><strong>Professional Installation:</strong> Battery installed by certified technicians.</li>
              <li><strong>Testing & Commissioning:</strong> Verify performance and safety compliance.</li>
              <li><strong>System Handover:</strong> Get user guide and documents for your battery.</li>
              <li><strong>Ongoing Monitoring:</strong> Track battery efficiency and schedule service.</li>
            </ol>
          </div>
          <Image
            src="/assets/img/photos/installation.png"
            alt="Battery Installation Process"
            width={500}
            height={400}
            style={imageStyle}
          />
        </div>
      </section>

      
      <Solarsection1 />
      <Solarsection2 />
      <Solarsection3 />

      {/* Plans */}
      <section style={{ paddingTop: '80px' }}>
        <div style={{ marginTop: '40px', maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Conclusion</h3>
          <p>
            The Victorian Energy Upgrade Program helps reduce energy bills and promotes sustainability
            with financial incentives for solar installation.
          </p>
        </div>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '300px',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div
                style={{
                  background: plan.gradient,
                  color: plan.textColor,
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                {plan.tag}
              </div>
              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {plan.size} System
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span>System</span>
                  <span>{plan.system}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span>Govt. Rebate</span>
                  <span>{plan.rebate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span>Interest Free Loan</span>
                  <span>{plan.loan}</span>
                </div>
                <div
                  style={{
                    borderTop: '1px solid #ccc',
                    borderBottom: '1px solid #ccc',
                    padding: '16px 0',
                    margin: '16px 0',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {plan.total}
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/contact">
                    <button
                      style={{
                        background: '#2563eb',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
                    >
                      Claim Offer
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

