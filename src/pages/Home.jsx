import Brands from "../components/Brands";
import Feedback from "../components/Feedback";
import WhyChoose from "../components/WhyChoose";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyChoose />
      <Brands />
      <Feedback />
    </div>
  );
};

export default Home;
