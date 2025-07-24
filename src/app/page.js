import React from "react";
// internal
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import HeroBanner from "@components/hero-banner";
import ShopCategoryArea from "@components/shop-category/shop-category";
import ShopProducts from "@components/products";
import OfferPopularProduct from "@components/offer-product";
import ShopBanner from "@components/shop-banner";
import Battery from '@components/shop-feature/battery'
import ShopFeature from "@components/shop-feature";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import Brands from "@components/brands";


export const metadata = {
  title: "Home - greenenergypowerco"
};

const HomeShop = () => {
  return (
    <Wrapper>
      <Header />
      <HeroBanner />
      <ShopCategoryArea />
      <ShopFeature />
      <Battery />
      <ShopProducts />
      <OfferPopularProduct />
      <ShopCta />
      <Brands />
      <ShopBanner />
      <Footer />
    </Wrapper>
  );
};

export default HomeShop;
