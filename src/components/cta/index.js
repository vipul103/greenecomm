'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import icon1 from '@assets/img/icon/consultant.png';
import icon2 from '@assets/img/icon/business-proposal.png';
import icon3 from '@assets/img/icon/application.png';
import icon4 from '@assets/img/icon/maintenance.png';
import icon5 from '@assets/img/icon/power-grid.png';
import icon6 from '@assets/img/icon/eco-house.png';
import icon7 from '@assets/img/icon/clean-house.png';

const steps = [
  {
    title: 'Free in-home consultation',
    text: 'A SolarSquare consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.',
    icon: icon1,
    align: 'left',
  },
  {
    title: 'Personalised solar proposal & dedicated manager',
    text: 'Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project.',
    icon: icon2,
    align: 'right',
  },
  {
    title: 'Paperwork and subsidy assistance',
    text: 'End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.',
    icon: icon3,
    align: 'left',
  },
  {
    title: 'Step-by-step professional & safe installation',
    text: 'Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner.',
    icon: icon4,
    align: 'right',
  },
  {
    title: 'Connection to the grid',
    text: 'We coordinate with the discom to connect your system to the power grid and install a new electricity meter.',
    icon: icon5,
    align: 'left',
  },
  {
    title: 'Power on your new system',
    text: 'Switch on your system to enjoy reduced electricity bills and an energy-independent future!',
    icon: icon6,
    align: 'right',
  },
  {
    title: 'Deep cleaning and maintenance',
    text: 'We’ll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.',
    icon: icon7,
    align: 'left',
  },
];

const TimelineSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="timeline-section">
      <div className="section-heading">
        <h2>The solar switch made simple</h2>
        <p>
          Switching to solar can seem daunting, but we've got you covered. Here's how it works.
        </p>
      </div>

      <div className="timeline-container">
        <div className="vertical-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '70px', position: 'relative', zIndex: 2 }}>
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (stepRefs.current[index] = el)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: visibleSteps.includes(index) ? '#E45983' : '#fff',
                  border: '4px solid #E45983',
                  boxShadow: visibleSteps.includes(index)
                    ? '0 0 12px 6px rgba(247, 0, 255, 0.8)'
                    : 'none',
                  transition: 'all 0.3s ease-in-out',
                  zIndex: 3,
                }}
              />

              <div
                className="step-box"
                style={{
                  maxWidth: '280px',
                  textAlign: 'center',
                  marginLeft: step.align === 'left' ? '-380px' : '380px',
                  position: 'relative',
                  zIndex: 4,
                }}
              >
                <Image src={step.icon} alt={`Step ${index + 1}`} width={64} height={64} />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background: linear-gradient(135deg, #072477, #004aad);
          padding: 60px 20px;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-heading h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff
        }

        .section-heading p {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          color: #fff
        }

        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 20px;
        }

        .vertical-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background-color: #ffffff;
          z-index: 1;
        }

        .step-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-top: 16px;
          margin-bottom: 8px;
          color: #fff
        }

        .step-text {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-top: 16px;
          font-weight: 500;
          color: #fff
        }

        @media screen and (max-width: 768px) {
          .step-box {
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 90% !important;
          }

          .step-text {
            font-size: 1rem !important;
            color: #fff
          }

          .step-title {
            font-size: 1.3rem !important;
          }

          .timeline-container {
            padding: 20px;
          }

          .vertical-line {
            left: 50% !important;
          }
        }

        @media screen and (max-width: 480px) {
          .step-box {
            max-width: 100% !important;
          }

          .step-title {
            font-size: 1.1rem !important;
          }

          .step-text {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }

          .timeline-container {
            padding: 10px;
          }

          .section-heading h2 {
            font-size: 1.8rem !important;
          }

          .section-heading p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
