import Banner from "../Banner";
import Footer from "../Footer";
import Freebook from "../Freebook";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <Navbar btnName="Login"/>
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
};

export default Home;
