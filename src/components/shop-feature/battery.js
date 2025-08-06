'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Import your background image
import bgPattern from '@assets/img/slider/banner7.png'; // Update with your actual path
const brands = [
  { name: 'Growatt', logo: '/assets/img/brand/growatt.png', href: '/solar-panel' },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IndustryBrands() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 20px',
        overflow: 'hidden',
        backgroundColor: '#f7f7f7', // Fallback color
      }}
    >
      {/* Background image with increased visibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: .99, // Increased opacity for better visibility
      }}>
        <Image
          src={bgPattern}
          alt="Background pattern"
          fill
          style={{
            objectFit: 'cover',
            mixBlendMode: 'multiply', // Helps blend with background
          }}
        />
      </div>

      {/* Adjusted overlay to allow pattern to show through */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // Reduced opacity
        zIndex: 1,
      }}></div>

      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2
          style={{
            fontSize: '2.75rem',
            color: '#212121',
            fontWeight: '700',
            marginBottom: '20px',
          }}
        >
          Order Solar Battery Now
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#0C0A00',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 50px',
          }}
        >
          We only stock the highest quality of products from brands you can rely on. <br />
          No short-cuts, no second-best — only the leaders in solar battery storage are installed and recommended by Solar Battery Group.
        </p>

        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                width: '160px',
                height: '100px',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)',
                background: 'white',
              }}
            >
              <Link href={brand.href}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    style={{ objectFit: 'contain', padding: '10px' }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </section>
  );
}