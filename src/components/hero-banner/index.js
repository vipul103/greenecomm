// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules"; 

// // internal
// import slider_img_1 from "@assets/img/slider/13/slider-1.png";
// import slider_img_2 from "@assets/img/slider/13/slider-1.png";
// import slider_img_3 from "@assets/img/slider/13/slider-1.png";
// import { RightArrow } from "@svg/index";

// const slider_data = [
//   {
//     id: 1,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Find Best <br /> Matley Sound.
//       </>
//     ),
//     img: slider_img_1,
//   },
//   {
//     id: 2,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Find your <br /> Beats Studio.
//       </>
//     ),
//     img: slider_img_2,
//   },
//   {
//     id: 3,
//     pre_title: (
//       <>
//         Best Ear <br /> Headphones
//       </>
//     ),
//     title: (
//       <>
//         Music To <br /> Fill Your Heart
//       </>
//     ),
//     img: slider_img_3,
//   },
// ];

// const HeroBanner = () => {
//   const [loop,setLoop] = useState(false);
//   useEffect(() => setLoop(true),[]);
//   return (
//     <>
//       <section className="slider__area">
//         <Swiper
//           className="slider__active slider__active-13 swiper-container"
//           slidesPerView={1}
//           spaceBetween={0}
//           effect="fade"
//           loop={loop}
//           modules={[EffectFade]}
//         >
//           {slider_data.map((item) => (
//             <SwiperSlide
//               key={item.id}
//               className="slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
//             >
//               <div className="container">
//                 <div className="row align-self-end">
//                   <div className="col-xl-6 col-lg-6">
//                     <div className="slider__content-13">
//                       <span className="slider__title-pre-13">
//                         {item.pre_title}
//                       </span>
//                       <h3 className="slider__title-13">{item.title}</h3>

//                       <div className="slider__btn-13 ">
//                         <Link href="/shop" className="tp-btn-border">
//                           Shop Now
//                           <span>
//                             <RightArrow />
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-6 col-lg-6">
//                     <div className="slider__thumb-13 text-end mr-40">
//                       <span className="slider__thumb-13-circle-1"></span>
//                       <span className="slider__thumb-13-circle-2"></span>
//                       <Image
//                         src={item.img}
//                         alt="slider img"
//                         priority
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default HeroBanner;
'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";            // ⬅️ NEW
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import banner1 from "@assets/img/slider/banner1.jpg";
import banner2 from "@assets/img/slider/banner2.jpg";
import banner3 from "@assets/img/slider/banner4.jpg";

/**
 * Give each slide its own URL.  
 * Replace the values in `href` with whatever pages you need.
 */
const slider_data = [
  { id: 1, img: banner1, href: "/#" },
  { id: 2, img: banner2, href: "/shop" },
  // { id: 3, img: banner3, href: "/contact" },
];

const overlayContent = [
  "Welcome to Our Website",
  "Premium Quality Services",
  "Exclusive Offers Just For You"
];

const HeroBanner = () => {
  const [loop, setLoop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLoop(true);

    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <section className="slider__area" style={{ overflow: "hidden" }}>
      <Swiper
        className="slider__active full-hero-slider"
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        loop={loop}
        autoplay={{ delay: 4000 }}
        modules={[EffectFade, Autoplay]}
      >
        {slider_data.map((item, index) => (
          <SwiperSlide key={item.id}>
            {/* Wrap the whole slide in <Link>. 
                passHref is automatic in Next 13+, so no need for passHref prop */}
            <Link
              href={item.href}
              aria-label={`Go to ${overlayContent[index]}`} // improves accessibility
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "1920px",
                  aspectRatio: isMobile ? "1 / 1.5" : "1920 / 800",
                  margin: "0 auto",
                  position: "relative",
                  cursor: "pointer" // lets the user know it's clickable
                }}
              >
                <Image
                  src={item.img}
                  alt={overlayContent[index]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: isMobile ? "cover" : "contain",
                    objectPosition: isMobile ? "top center" : "center",
                    display: "block",
                  }}
                  priority
                />

                {/* Mobile-only overlay text */}
                {isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      top: "70%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      textAlign: "center",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      width: "100%",
                      maxWidth: "90%",
                      fontSize: "clamp(20px, 6vw, 32px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      padding: "0 10px",
                      pointerEvents: "none" // text doesn’t block taps
                    }}
                  >
                    {overlayContent[index]}
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
