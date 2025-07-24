import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import OfferArea from "@components/ouroffers/offer-area";

export const metadata = {
  title: "Contact - greenenergypowerco",
};

export default function Contact() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <OfferArea />
      <Footer />
    </Wrapper>
  );
}