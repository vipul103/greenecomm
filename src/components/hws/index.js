'use client';

import Image from 'next/image';
import Link from 'next/link';
import imgHotWaterSystem1 from '@assets/img/productphotos/ecogenic.png';
import imgHotWaterSystem2 from '@assets/img/productphotos/ema.webp';
import imgHotWaterSystem3 from '@assets/img/productphotos/spt2.png';
import heroBg from '@assets/img/banner/bg2.jpg';

const HeatPumpPage = () => {
  const flipCards = [
    {
      img: imgHotWaterSystem1,
      title: 'ECOGENICA',
      desc: 'Ecogenica® Heat Pumps for a Sustainable Future',
      link: '/ecogenica',
    },
    {
      img: imgHotWaterSystem2,
      title: 'EMARALD',
      desc: 'Emarald Heat Pumps for a Sustainable Future',
      link: '/emarald',
    },
    {
      img: imgHotWaterSystem3,
      title: 'SPT',
      desc: 'SPT Heat Pumps for a Sustainable Future',
      link: '/spt',
    },
  ];

  const logos = ['eco.png', 'emarold.png', 'st2.png'];
  const icons = [
    { icon: 'p-icon1.png', text: 'Environmentally Friendly' },
    { icon: 'p-icon2.png', text: 'Saves Money' },
    { icon: 'p-icon3.png', text: 'Energy Efficient' },
    { icon: 'p-icon4.png', text: 'Works in Cooler Climates' },
    { icon: 'p-icon5.png', text: 'All Weather Conditions' },
  ];

  return (
    <>
      <style jsx>{`
        h1, h2, h3, p, p.lead, li { font-size: inherit; }

        @media (min-width: 200px) and (max-width: 1200px) {
          h1 { font-size: 2rem; }
          h2 { font-size: 2.3rem; }
          h3 { font-size: 2.6rem; }
          p.h6 { font-size: 1.9rem; }
          p { font-size: 2.3rem; line-height: 1.6; }
          p.lead { font-size: 1.9rem; line-height: 1.7; }
          li { font-size: 2.1rem !important; line-height: 1.6; }
          .btn-main { font-size: 1rem; padding: 12px 20px; }
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

        .flip-card-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          padding: 4rem 2rem;
          background-color: #f9fafb;
        }
        .flip-card {
          perspective: 1000px;
          width: 300px;
          height: 300px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
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
          border-radius: 1rem;
          overflow: hidden;
        }
        .flip-card-front {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom right, rgb(58, 201, 94), rgb(9, 255, 83));
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
          text-align: center;
        }
          .photo-card {
  width: 300px;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-bottom-bar {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: #f1f5f9;
}
  .image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6); /* dark overlay */
  text-align: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.quick-view-text {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
}


.image-wrapper:hover .overlay {
  opacity: 1;
}


.view-more-btn {
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color: white;
  background-color: #10b981; /* emerald green */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-more-btn:hover {
  background-color: #059669; /* darker emerald */
}

        .learn-more-btn {
          margin-top: 1rem;
          padding: 0.5rem 1.2rem;
          font-size: 1rem;
          color: rgb(0, 255, 34);
          background-color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .learn-more-btn:hover {
          background-color: #fde047;
          color: white;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Hot Water Systems</span>
          </h1>
          <p className="hero-description">
            Upgrade to modern, energy-efficient hot water systems. Save on bills while enjoying superior performance with government rebates.
          </p>
        </div>
      </section>

      {/* Flip Cards */}
      <section className="flip-card-container">
      
  {flipCards.map((card, index) => (
    <div className="photo-card" key={index}>
      <div className="image-wrapper">
      <Link href={card.link}>
        <Image src={card.img} alt={card.title} width={300} height={300} />
        <div className="overlay">
  <span className="quick-view-text">Quick View 👁</span>
</div>

        </Link>
      </div>
    </div>

  ))}

</section>




      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>How a Heat Pump Saves You Money</h3>
              <p>Heat Pumps work like a reverse refrigerator – transferring heat from the air to heat your water.</p>
              <p>They concentrate existing heat instead of creating more, saving energy and reducing greenhouse gas emissions.</p>
              <p>Unlike solar, they work in all weather and are ~4x more efficient than standard electric heaters.</p>
            </div>
            <div className="col-lg-4">
              <div style={{ width: '100%', maxWidth: '400px' }}>
  <Image
    src="/assets/img/photos/realhws.png"
    alt="Heat Pump Benefits"
    width={400}
    height={400}
    style={{ width: '100%', height: 'auto' }}
  />
</div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            {icons.map(({ icon, text }, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <Image src={`/assets/icons/${icon}`} width={80} height={80} alt={text} />
                <p className="h6 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div style={{ width: '100%', maxWidth: '400px' }}>
  <Image
    src="/assets/img/photos/realspt.png"
    alt="Heat Pump Working"
    width={400}
    height={400}
    style={{ width: '100%', height: 'auto' }}
  />
</div>

            </div>
            <div className="col-lg-8">
              <h3>How Does the Heat Pump Work?</h3>
              <ol>
                <li>Air is drawn in and heat is absorbed by refrigerant.</li>
                <li>Heat turns refrigerant into gas.</li>
                <li>Gas heats water via heat exchanger.</li>
                <li>Cooled refrigerant cycles again through expansion valve.</li>
              </ol>
              <p>This efficient process uses far less electricity than traditional systems.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeatPumpPage;
