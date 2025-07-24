"use client";

export default function VEUSection() {
  return (
    <section className="veu-section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-left">
            <h2>
              VEU Program Offers Discounts on Energy-Efficient Products
            </h2>

            <div className="subtitle">About VEU :</div>
            <p>
              The{" "}
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victorian Energy Upgrades
              </a>{" "}
              program helps Victorians save on energy bills by offering
              discounts and rebates for energy-efficient products and services.
            </p>
            <p>
              By encouraging the switch to efficient electric alternatives, the
              program helps cut energy costs, reduce energy consumption, and
              lower greenhouse gas emissions.
            </p>
            <p>
              The program is expected to save 28 million tonnes of greenhouse
              gas emissions for Victoria between 2022 and 2025—equivalent to
              removing 8.5 million cars from the road for a year.
            </p>

            <div className="subtitle">How Does the Program Work?</div>
            <p>
              When you upgrade your home or business with energy-efficient
              solutions under the Victorian Energy Upgrades (VEU) program,
              accredited providers create{" "}
              <strong>Victorian Energy Efficiency Certificates (VEECs).</strong>
            </p>
            <p>
              Each certificate represents one tonne of greenhouse gas prevented
              from entering our atmosphere.
            </p>
            <p>
              Accredited providers sell these certificates to energy retailers,
              funding the <strong>discounts and rebates</strong> available to
              consumers. Retailers use the certificates to meet government-set
              annual emissions targets.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-right">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WWjIg0cCKj8?si=oP4Su1_UrwW8WpKb"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="video"
            ></iframe>
          </div>
        </div>

        <div className="footnote">
          <p>
            <strong>Conditions Apply:</strong> Discounts are based on the VEU
            program and standard metropolitan back-to-back installation.
            Additional costs may apply for non-standard installations, including
            double-storey homes and switchboard upgrades.
          </p>
          <p>
            This offer is part of the{" "}
            <a
              href="https://www.energy.vic.gov.au/households/victorian-energy-upgrades-for-households"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victorian Energy Upgrades Program
            </a>
            . Some models require pre-ordering, with delivery taking
            approximately 2 weeks.
          </p>
        </div>
      </div>

      <style jsx>{`
        .veu-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #f9f9f9, #ffffff);
          text-align: left;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .row {
            flex-direction: row;
            align-items: center;
          }
        }

        .col-left,
        .col-right {
          flex: 1;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0077ff;
          text-shadow: 0 0 10px rgba(0, 119, 255, 0.4);
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.25rem;
          font-weight: bold;
          color: #222;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        a {
          color: #0077ff;
          text-decoration: underline;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #005bb5;
        }

        .video {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .footnote {
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
}
