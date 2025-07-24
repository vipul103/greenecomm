import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ShopCta from "@components/cta";
import AboutArea from "@components/about";
import Hws from "@components/hws";
import Footer from "@layout/footer";

export const metadata = {
  title: "About - greenenergypowerco",
};
const About = () => {
  return (
    <Wrapper>
      <Header style_2={true} />
      <Hws />
      <Footer />
    </Wrapper>
  );
};

export default About;
