import Brands from "../components/Brands";
import Feedback from "../components/Feedback";
import WhyChoose from "../components/WhyChoose";
import Banner from "../components/Banner";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyChoose />
      <Brands />
      <Feedback />
      <ScrollRestoration />
    </div>
  );
};

export default Home;
