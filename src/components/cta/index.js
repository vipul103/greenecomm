"use client";
import React from "react";
import Image from "next/image";

// Replace with your actual image paths or dynamic data
import approvalLogo from "@assets/img/logo/vic.png";
import vicLogo from "@assets/img/logo/approval.jpg";

const AccreditationsSection = () => {
  return (
    <section className="py-5 bg-light overflow-hidden">
      <div className="container text-center px-2 sm:px-4">
        <h2
          className="mb-3 wow fadeInUp break-words text-sm sm:text-lg md:text-2xl font-semibold"
          data-wow-delay=".2s"
        >
          OUR ACCREDITATIONS & CERTIFICATIONS
        </h2>

        <p
          className="mag mb-5 wow fadeInUp text-xs sm:text-base"
          data-wow-delay=".4s"
        >
          We are Accredited / Certified by the following organisations which are
          well known in the Solar Industry.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-1/2 sm:w-auto mb-3">
            <Image
              src={approvalLogo}
              alt="Solar Accreditation Logo"
              className="img-fluid logo-small wow fadeInUp"
              data-wow-delay=".6s"
              width={150}
              height={75}
            />
          </div>
          <div className="w-1/2 sm:w-auto mb-3">
            <Image
              src={vicLogo}
              alt="Solar Accreditation Logo"
              className="img-fluid logo-small wow fadeInUp"
              data-wow-delay=".6s"
              width={150}
              height={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
