'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/scrollbar";

// internal
import SingleCategory from "./single-category";
import ErrorMessage from "@components/error-message/error";
import CategoryLoader from "@components/loader/category-loader";
import { useGetCategoriesQuery } from "src/redux/features/categoryApi";

const ShopCategoryArea = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <CategoryLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMessage message="There was an error" />;
  } else if (categories?.categories?.length === 0) {
    content = <ErrorMessage message="No Category found!" />;
  } else if (categories?.categories?.length > 0) {
    content = categories.categories.map((item, i) => (
      <SwiperSlide key={i}>
        <SingleCategory item={item} />
      </SwiperSlide>
    ));
  }

  return (
    <section className="product__category pt-40 pb-100">
      <div className="container">
        {/* Heading outside the slider, closer to top */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          OUR PRODUCTS
        </h2>

        <div className="row">
          <div className="col-xxl-12">
            <div className="product__category-slider">
              <Swiper
                className="product__category-slider-active swiper-container"
                slidesPerView={4}
                spaceBetween={30}
                loop={loop}
                modules={[Scrollbar]}
                scrollbar={{
                  el: ".tp-scrollbar",
                  clickable: true,
                }}
                breakpoints={{
                  1601: { slidesPerView: 4 },
                  1400: { slidesPerView: 4 },
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 2, spaceBetween: 20 },
                  0: { slidesPerView: 1, spaceBetween: 0 },
                }}
              >
                {content}
              </Swiper>

              <div className="tp-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategoryArea;
