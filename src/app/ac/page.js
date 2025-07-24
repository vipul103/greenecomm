import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ShopCta from "@components/cta";
import AboutArea from "@components/about";
import Ac from "@components/ac";
import Footer from "@layout/footer";

export const metadata = {
  title: "About - greenenergypowerco",
};
const About = () => {
  return (
    <Wrapper>
      <Header style_2={true} />
      <Ac />
      <Footer />
    </Wrapper>
  );
};

export default About;
