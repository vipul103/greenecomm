"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const EnergySageSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <section style={{ background: "linear-gradient(135deg, #072477, #004aad)", padding: "4rem 1rem" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.75rem" : "2rem",
              fontWeight: "bold",
              color: "#ffffffff",
            }}
          >
            Electrify your home with Green Energy Power Co
          </h2>

          {/* Feature 1 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ fontSize: "1.5rem", color: "#f97316" }}>🛒</div>
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#ffffffff" }}>
                One stop for all your home energy needs
              </h3>
              <p style={{ color: "#ffffffff" }}>
                Confidently shop solar, EV chargers, heating/AC, and more. Your Energy Advisor can help you plan and customize.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ fontSize: "1.5rem", color: "#f97316" }}>⭐</div>
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#ffffffff" }}>
                Top products, expertly installed
              </h3>
              <p style={{ color: "#ffffffff" }}>
                Your clean energy home is within reach. Our network of vetted installers can help.{" "}
                <Link href="/contact">
                <span
                  style={{
                    color: "#ff0000ff",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Learn about our rating system
                </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ fontSize: "1.5rem", color: "#f97316" }}>✨</div>
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#ffffffff" }}>
                Simple, hassle-free savings
              </h3>
              <p style={{ color: "#ffffffff" }}>
                Compare and shop clean energy solutions on your own terms. No sales, just support.
              </p>
            </div>
          </div>

          <p style={{ fontSize: "0.875rem", color: "#ffffffff", paddingTop: "0.5rem" }}>
            Our free, unbiased Energy Advisors help thousands of homeowners compare quotes, review options, and confidently select an installer.
          </p>
        </div>

        {/* Right - Local MP4 Video */}
        <div
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            width: "100%",
          }}
        >
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <video
              src="/assets/img/icon/GEP Video.mp4" // ← your video file name
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "0.75rem",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySageSection;
