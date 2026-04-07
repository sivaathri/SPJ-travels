import Header from "./components/Header/HeaderContact";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import BookingForm from "./components/Booking/BookingForm";
import FeatureSection from "./components/Features/FeatureSection";
import AboutSection from "./components/About/AboutSection";
import ServiceSection from "./components/Services/ServiceSection";
import TariffSection from "./components/Tariff/TariffSection";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <Header />
      <Navbar />
      <Hero />
      <BookingForm />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <TariffSection />
      <Footer />
    </div>
  );
}

export default App;
