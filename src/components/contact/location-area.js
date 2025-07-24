import Image from "next/image";
// internal
import location_icon_1 from "@assets/img/contact/contact-location-4.png";
import location_icon_2 from "@assets/img/contact/contact-location-2.png";
import location_icon_3 from "@assets/img/contact/contact-location-3.png";

// single location item
function SingleLocationItem({ title, icon, location, tel }) {
  return (
    <div className="contact__location-item">
      <div className="row align-items-center">
        <div className="col-lg-9 col-md-8 col-sm-7">
          <div className="contact__location-content d-lg-flex align-items-center">
            <h3 className="contact__location-title">{title}</h3>
            <div className="contact__location-info d-sm-flex flex-wrap align-items-center">
              <div className="contact__location-icon mr-45">
                <Image src={icon} alt="icon image" />
              </div>
              <div className="contact__location-content">
                <p>
                  <a href="mailto:contact.location@website.com">{location}</a>
                </p>
                <p>
                  <a href="tel:686-324-6838">{tel}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-5">
          <div className="contact__location-btn text-sm-end">
            <a
              rel="noreferrer"
              href="https://www.google.com/maps/place/1333+North+Rd,+Huntingdale+VIC+3166,+Australia/@-37.9118485,145.1040268,857m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ad66ae4394ee21f:0x533d95a5ebbbcd14!8m2!3d-37.9118528!4d145.1088977!16s%2Fg%2F11c22npfbk?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="tp-btn-border"
            >
              view location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const LocationArea = () => {
  return (
    <section className="contact__location-area pb-130 pt-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7 offset-xl-1 col-md-8">
            <div className="tp-section-wrapper-2 mb-35">
              <span className="tp-section-subtitle-2 subtitle-mb-9">
                LOCATIONS
              </span>
              <h3 className="tp-section-title-2 font-40">
                Come and visit our Warehouse around the world
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 ">
            <div className="contact__location-wrapper">
              <SingleLocationItem
                title="Australia Warehouse"
                icon={location_icon_1}
                location="support@greenenergypowerco.com"
                tel="1300785436"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationArea;
