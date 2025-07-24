import React from "react";
import Image from "next/image";
// internal
import SocialLinks from "@components/social";
import icon_1 from "@assets/img/contact/icon/contact-icon-1.png";
import icon_2 from "@assets/img/contact/icon/contact-icon-3.png";
import icon_3 from "@assets/img/contact/icon/contact-icon-2.png";

// single item
function SingleItem({ icon, title, content }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="contact__item text-center mb-30 transition-3 white-bg">
        <div className="contact__icon">
          <Image src={icon} alt="icon" />
        </div>
        <div className="contact__content">
          <span className="contact-item-subtitle">{title}</span>
          {content}
        </div>
      </div>
    </div>
  );
}

const BoxItems = () => {
  return (
    <div
      className={`contact__item-area contact__translate-2`}
    >
      <div className="container">
        <div className="row">
          <SingleItem
            icon={icon_1}
            title="Contact"
            content={
              <>
                <p>
                  <a href="mailto:support@greenenergypowerco.com">support@greenenergypowerco.com</a>
                </p>
                <p>
                  <a href="tel:1300785436">1300785436</a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_2}
            title="Location"
            content={
              <>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/1%2F180+High+St,+Ashburton+VIC+3147,+Australia/@-37.8634627,145.0755281,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ad641db9edfd837:0xb1cf052bb13eac52!8m2!3d-37.863467!4d145.078103!16s%2Fg%2F11qpkkyc4k?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                     1/180 High Street, Ashburton, Victoria 3147, Australia
                  </a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_3}
            title="Social Media"
            content={
              <>
                {" "}
                <p>Follow on social media</p>
                <div className="contact__social">
                  <SocialLinks />
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BoxItems;
