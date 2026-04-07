import Header from "../components/Header/HeaderContact";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import BookingForm from "../components/Booking/BookingForm";
import FeatureSection from "../components/Features/FeatureSection";
import AboutSection from "../components/About/AboutSection";
import ServiceSection from "../components/Services/ServiceSection";
import TariffSection from "../components/Tariff/TariffSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <BookingForm />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <TariffSection />
      <Footer />
    </>
  );
};

export default Home;
