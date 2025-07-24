'use client';

import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import heroBg from '@assets/img/banner/bg2.jpg';

const plans = [
  {
    size: '6.6kW',
    tag: "PEOPLE'S CHOICE",
    system: '+$3679',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$969',
    gradient: 'blue-gradient',
  },
  {
    size: '10.12kW',
    tag: 'RECOMMENDED PACKAGE',
    system: '+$5799',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$4,240',
    gradient: 'purple-gradient',
  },
  {
    size: '13.2kW',
    tag: 'PREMIUM SOLAR PACKAGE',
    system: '+$7299',
    rebate: '-$1400',
    loan: '-$1400',
    total: '$5,099',
    gradient: 'gold-gradient',
  },
];

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

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
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

        .solar-package {
          border: 1px solid #ccc;
          border-radius: 10px;
          width: 300px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .solar-package:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .package-header {
          color: white;
          padding: 16px;
          text-align: center;
        }

        .package-details {
          padding: 24px;
        }

        .package-details .detail {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .total {
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          padding: 16px 0;
          margin: 16px 0;
          text-align: center;
        }

        .total p {
          font-size: 24px;
          font-weight: bold;
          background: linear-gradient(to right, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .inquire-btn,
          .claim-btn {
    display: inline-block;
    background: #2563eb;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
  }
          .plan-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

/* Gradient background classes for header */
.blue-gradient {
  background: linear-gradient(to right, #1e3a8a, #3b82f6);
}

.purple-gradient {
  background: linear-gradient(to right, #6b21a8, #c084fc);
}

.gold-gradient {
  background: linear-gradient(to right, #facc15, #fde047);
  color: #000; /* dark text for contrast */
}


        .inquire-btn:hover,
        .claim-btn:hover {
          background: #1d4ed8;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Solar Panel</span>
          </h1>
          <p className="hero-description">
            Upgrade to modern, energy-efficient Solar Panel. Save on bills while enjoying superior performance with government rebates.
          </p>
        </div>
      </section>

      {/* Why Solar Section */}
      <section className="product-section">
        <div className="container product-grid">
          <Image
            src="/assets/img/photos/alfha.jpg"
            alt="Solar Panels"
            width={500}
            height={400}
            className="rounded"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Install Solar Panels Under the Victorian Energy Upgrade Program?
            </h3>
            <p className="mb-4 font-medium">
              1. <strong>Significant Cost Savings:</strong><br />
              Get rebates, reduce upfront costs, and start saving from day one.
            </p>
            <p className="mb-4 font-medium">
              2. <strong>Environmental Impact:</strong><br />
              Cut down on fossil fuels and your carbon footprint.
            </p>
            <p className="mb-4 font-medium">
              3. <strong>Increased Home Value:</strong><br />
              A solar-powered home is an investment and attracts buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="product-section pb-10">
        <div className="container product-grid">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Process to Install Solar Panels</h3>
            <ol className="list-decimal list-inside space-y-3">
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
            className="rounded"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />

        </div>
        <div className="mt-10 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold">Conclusion</h3>
          <p>
            The Victorian Energy Upgrade Program helps reduce energy bills and promotes sustainability with financial incentives for solar installation.
          </p>
        </div>

      </section>
      <section className="product-section">
        <div className="container plan-grid">
          {plans.map((plan, index) => (
            <div key={index} className="solar-package">
              <div className={`package-header ${plan.gradient}`}>
                {plan.tag}
              </div>
              <div className="package-details">
                <h3 style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>
                  {plan.size} System
                </h3>
                <div className="detail">
                  <span>System</span>
                  <span>{plan.system}</span>
                </div>
                <div className="detail">
                  <span>Govt. Rebate</span>
                  <span>{plan.rebate}</span>
                </div>
                <div className="detail">
                  <span>Interest Free Loan</span>
                  <span>{plan.loan}</span>
                </div>
                <div className="total">
                  <p>{plan.total}</p>
                </div>
                <div className="text-center">
                  <Link href="/contact">
                   <button  className="claim-btn"> Claim Offer</button>
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Pricing Plans Section */}

    </main>
  );
}
