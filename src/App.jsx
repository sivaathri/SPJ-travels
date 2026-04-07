import Header from "./components/Header/HeaderContact";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import BookingForm from "./components/Booking/BookingForm";
import FeatureSection from "./components/Features/FeatureSection";
import AboutSection from "./components/About/AboutSection";


function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <Header />
      <Navbar />
      <Hero />
      <BookingForm />
      <FeatureSection />
      <AboutSection />
      <div
        style={{
          background: "#f5f5f5",
          paddingTop: "80px",
          paddingBottom: "40px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#999", fontSize: "14px" }}>
          © {new Date().getFullYear()} SPJ Tours & Travels. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
