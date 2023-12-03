import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-10 lg:px-0">
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
