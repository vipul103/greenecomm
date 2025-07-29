import Link from "next/link";
import Image from "next/image";
// internal
import logo from '@assets/img/logo/newlogo.png';
import payment from '@assets/img/footer/footer-payment.png';
import SocialLinks from "@components/social";
import CopyrightText from "./copyright-text";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div
      className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
    >
      <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((l, i) => (
              <li key={i}>
                <Link href={l.link}>{l.title}</Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-white"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          Green Energy Power Co is one of the fastest growing, most trusted and reliable companies working on installing and upgrading energy efficient Heating and Cooling, Solar Panels, Inverters and Hot Water Systems under the policies of VEU Program in Melbourne, Australia.
                        </p>
                        <div className="footer__social footer__social-11">
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SingleWidget
                  col="2"
                  col_2="4"
                  col_3="2"
                  title="What we do"
                  contents={[
                    { link: "/", title: "Home" },
                    { link: "/about", title: "About Us" },
                    { link: "/veu", title: "VEU Program" },

                  ]}
                />
                <SingleWidget
                  col="3"
                  col_2="3"
                  col_3="3"
                  title="Product"
                  contents={[
                    // { link: "/shop", title: "Shop" },
                    { link: "/hotwater", title: "HotWater System" },
                    { link: "/ac", title: "Air Conditioner" },
                    { link: "/solar-panel", title: "Solar Panel" },
                    { link: "/ouroffer", title: "Our Offers" },
                  ]}
                />
                <SingleWidget
                  col="1"
                  col_2="3"
                  col_3="4"
                  title="Support"
                  contents={[
                    { link: "/faq", title: "FAQs" },
                    { link: "/policy", title: "Privacy & Policy" },
                    { link: "/contact", title: "Contact us" },
                  ]}
                />

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-11-5">
                    <h3 className="footer__widget-title">Talk To Us</h3>

                    <div className="footer__widget-content">
                      <p className="footer__text">
                        Find a location nearest you. See{" "}
                        <a href="https://www.google.com/maps/place/1%2F180+High+St,+Ashburton+VIC+3147,+Australia/@-37.8634627,145.0755281,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6ad641db9edfd837:0xb1cf052bb13eac52!8m2!3d-37.863467!4d145.078103!16s%2Fg%2F11qpkkyc4k?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D">Our Stores</a>
                      </p>
                      <div className="footer__contact">
                        <div className="footer__contact-call">
                          <span>
                            <a href="tel:624-423-26-72">+1300 685 958</a>
                          </span>
                        </div>
                        <div className="footer__contact-mail">
                          <span>
                            <a href="mailto:support@harry.com">
                              support@greenenergypowerco.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__payment text-sm-end">
                      <Image src={payment} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
