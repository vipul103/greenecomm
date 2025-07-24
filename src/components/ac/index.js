// pages/heating-cooling.js
'use client';
import Image from 'next/image';
import img1 from  '@assets/img/photos/msac.png';
import img2 from  '@assets/img/photos/rinnai2.png';
import img3 from  '@assets/img/photos/ducted1.png';
import heroBg from '@assets/img/banner/bg2.jpg';

const systems = [
  {
    src: img1,
    title: 'Split Air Conditioning',
    desc: 'A split AC consists of an indoor unit and an outdoor unit. It is designed for cooling single rooms and is commonly used in homes and small offices. Since the compressor is placed outside, it operates quietly and efficiently. This type of AC is energy-efficient and aesthetically pleasing, making it a great choice for individual room cooling.',
  },
  {
    src: img2,
    title: 'Multi-split Air Conditioning',
    desc: 'A multi-split AC system allows multiple indoor units to be connected to a single outdoor unit. This setup is ideal for cooling multiple rooms without the need for multiple outdoor units. It provides individual temperature control for each room and is more energy-efficient compared to using multiple split systems separately. This type of AC is suitable for apartments, offices, and multi-room cooling solutions.',
  },
  {
    src: img3,
    title: 'Ducted Air Conditioning',
    desc: 'A ducted AC system uses a central indoor unit connected to ductwork, distributing cool air throughout the entire home or office. It provides uniform cooling across multiple rooms and can be zoned for efficiency, allowing different areas to be cooled independently. The ducts are hidden, ensuring a seamless and aesthetically pleasing design. Ducted systems are best suited for large homes, commercial spaces, and whole-building cooling needs.',
  },
];

export default function HeatingCoolingPage() {
  return (
    <>
     <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Heating and Cooling System</span>
          </h1>
          <p className="hero-description">
            Upgrade to modern, energy-efficient Heating and Cooling System. Save on bills while enjoying superior performance with government rebates.
          </p>
        </div>
      </section>
      <section className="pt50">
        <div className="container">
          <h2 className="text-center">Types of Heating and Cooling System:</h2>
          <div className="row">
            {systems.map(({ src, title, desc }, i) => (
              <div className="col-md-4" key={i}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <Image src={src} alt={title} layout="fill" objectFit="cover" className="rounded-1" />
                    </div>
                    <div className="flip-card-back">
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
                <h5 className="text-center pt-2">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>How an Energy Efficient Aircon saves you money</h3>
              <p>Opting for energy-efficient air conditioning under the Victorian Energy Upgrade Program offers households significant savings and benefits:</p>
              <ol>
                <li>Lower Energy Bills: Energy-efficient air conditioning systems consume less electricity, leading to reduced energy bills.</li>
                <li>Rebates and Incentives: The Victorian Energy Upgrade Program provides financial incentives that lower the upfront cost of purchasing and installing energy-efficient air conditioning systems.</li>
                <li>Improved Comfort: These systems offer superior temperature control, ensuring consistent and comfortable cooling.</li>
                <li>Reduced Carbon Footprint: Replacing old units with energy-efficient models significantly decreases carbon emissions.</li>
                <li>Longer Lifespan: Advanced technology reduces wear and tear, extending operational life.</li>
              </ol>
            </div>
            <div className="col-lg-4">
              <Image src="/assets/img/photos/side1.png" alt="Side Aircon" width={500} height={400} className="img-fluid rounded-1 w-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <Image src="/assets/img/photos/rinnaiac.png" alt="Rinnai Aircon" width={500} height={400} className="img-fluid rounded-1 w-100" />
            </div>
            <div className="col-lg-8">
              <h3>What is the process of getting Air Conditioning System work for your house and its benefits?</h3>
              <ol>
                <li>Assessment: A technician evaluates your existing unit for eligibility under the Victorian Energy Upgrade Program.</li>
                <li>Selection: A suitable energy-efficient unit is chosen using advanced tech like smart thermostats.</li>
                <li>Installation: The old unit is replaced with minimal disruption to your home.</li>
                <li>Rebates: Financial incentives reduce the cost of the new unit.</li>
                <li>Operation: Modern systems use less energy and maintain consistent temperatures.</li>
                <li>Monitoring: Smart controls improve energy monitoring and reduce maintenance needs.</li>
                <li>Savings: Over time, you benefit from lower bills and reduced environmental impact.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        h1, h2, h3, p, li {
          font-size: inherit;
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
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 500px;
          perspective: 1000px;
          position: relative;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 10px;
          overflow: hidden;
          top: 0;
          left: 0;
        }
        .flip-card-front {
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .flip-card-back {
          background: rgb(164, 240, 161);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transform: rotateY(180deg);
        }
        .pt50 {
          padding-top: 50px;
        }
        .text-center {
          text-align: center;
        }

        @media (max-width: 768px) {
          .flip-card {
            height: 250px;
          }
        }

        @media (min-width: 200px) and (max-width: 1200px) {
          h1 {
            font-size: 2.25rem;
          }
          h2 {
            font-size: 1.75rem;
          }
          h3 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 1.7rem;
            line-height: 1.6;
          }
          li {
            font-size: 1.125rem;
            line-height: 1.6;
          }
          .pt50 h2 {
            font-size: 1.75rem;
          }
          .pt50 h3 {
            font-size: 2.3rem !important;
          }
          .pt50 ol li {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </>
  );
}
