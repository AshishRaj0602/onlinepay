
import Navbar from "../src/components/Navbar"
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import HowWorks from "./components/HowWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs2 from "./components/AboutUs2";
import RechargePay from "./components/RechargePay";

const Home=()=> {
  return (
    <>
      <Navbar />
      <Header />
      <RechargePay/>
      <HowWorks/>
      <AboutUs/>
      <AboutUs2/>
      
      <Services/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Home;
