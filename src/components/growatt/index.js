'use client';
import Image from 'next/image'
import Head from 'next/head'

export default function EvereadyPage() {
  return (
    <>
      <Head>
        <title>Growatt Solar Battery | Solar Battery Group</title>
        <meta name="description" content="Eveready solar battery information and product highlights" />
      </Head>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/eveready-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div>
          <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Growatt</h1>
          <p style={{ fontSize: '24px' }}>Reliable. Affordable. Australian.</p>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section
        style={{
          background: '#f5f5f5',
          padding: '50px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            maxWidth: '1200px',
            margin: 'auto',
          }}
        >
          {[
            { icon: '/icons/battery.svg', text: '5 kWh & 10 kWh Options' },
            { icon: '/icons/warranty.svg', text: '10 Year Warranty' },
            { icon: '/icons/monitor.svg', text: 'App Monitoring' },
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center', width: '150px' }}>
              <Image src={item.icon} alt={item.text} width={50} height={50} />
              <p style={{ marginTop: '10px' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: '60px 20px',
          background: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: 'auto',
          }}
        >
          {/* Text Content */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Built for Australia</h2>
            <p>
              Growatt is a household name trusted by Australians for decades. Now offering solar batteries with advanced
              safety and energy-saving tech.
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
              <li>All-in-one storage</li>
              <li>Seamless backup capability</li>
              <li>High cycle life</li>
              <li>Safe LiFePO4 battery chemistry</li>
            </ul>
          </div>

          {/* Image Content */}
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            <Image src="/images/eveready-battery.jpg" alt="Eveready Battery" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Responsive CSS for smaller screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          section h1 {
            font-size: 36px !important;
          }
          section p {
            font-size: 18px !important;
          }
          section h2 {
            font-size: 24px !important;
          }
          section div {
            text-align: center !important;
          }
        }
      `}</style>
    </>
  )
}
