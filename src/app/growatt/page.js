import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ShopCta from "@components/cta";
import AboutArea from "@components/about";
import Growatt from "@components/growatt";
import Footer from "@layout/footer";

export const metadata = {
  title: "About - greenenergypowerco",
};
const About = () => {
  return (
    <Wrapper>
      <Header style_2={true} />
      <Growatt />
      <Footer />
    </Wrapper>
  );
};

export default About;
