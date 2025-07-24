import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import CareerArea from "@components/career/career-area";

export const metadata = {
  title: "Contact - greenenergypowerco",
};

export default function Contact() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <CareerArea />
      <Footer />
    </Wrapper>
  );
}
