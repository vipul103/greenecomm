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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import banner1 from "@assets/img/slider/bg.png";
import banner2 from "@assets/img/slider/new.jpg";

const bannerImages = [banner1, banner2];
const overlayContent = ["book solar battery now", "welcome to our website"];

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden pt-[110px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {bannerImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full"
              style={{ minHeight: "calc(100vh - 110px)", position: "relative" }}
            >
              <Image
                src={item}
                alt={overlayContent[index]}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />

              {/* Only show overlay on mobile view */}
               {isMobile && (
                <div style={{
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
                  padding: "0 10px"
                }}>
                  {overlayContent[index]}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
