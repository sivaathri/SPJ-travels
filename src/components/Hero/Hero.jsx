import { useState, useEffect } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: bg1,
      welcome: "Welcome to SPJ Travels!",
      title: "SPJ Travels",
      subtitle: "Best Cab Service in Pondicherry!",
    },
    {
      image: bg2,
      welcome: "Experience The Comfort!",
      title: "Premium Fleet",
      subtitle: "Safe & Luxurious Rides For Every Journey!",
    },
    {
      image: bg3,
      welcome: "Travel Beyond Limits!",
      title: "Outstation Trips",
      subtitle: "Safe, Comfortable & Affordable Rides to Any Destination!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section 
      style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "750px", 
        overflow: "hidden",
        backgroundColor: "#1f2a44" 
      }}
    >
      {/* Background Images - Cross-fade transition */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            opacity: current === idx ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark gradient overlay bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(20,30,50,0.8) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Central hero text content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "280px",
          textAlign: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Welcome line */}
            <p
              style={{
                color: "#f58220",
                fontWeight: 700,
                fontSize: "24px",
                marginBottom: "15px",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "2px",
              }}
            >
              {slides[current].welcome}
            </p>

            {/* Main Heading */}
            <h1
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "clamp(52px, 8vw, 110px)",
                fontFamily: "'Poppins', sans-serif",
                textTransform: "uppercase",
                margin: "0 0 15px 0",
                textShadow: "0 10px 40px rgba(0,0,0,0.5)",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              {slides[current].title}
            </h1>

            {/* Sub heading */}
            <p
              style={{
                color: "rgba(255,255,255,0.95)",
                fontSize: "26px",
                fontWeight: 400,
                marginBottom: "45px",
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "800px",
                margin: "0 auto 45px auto",
              }}
            >
              {slides[current].subtitle}
            </p>

            {/* Book Now Button [NO BORDER] */}
            <button
              style={{
                background: "#1f2a44",
                color: "white",
                fontWeight: 700,
                fontSize: "20px",
                border: "none",
                padding: "18px 70px",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "2px",
                transition: "all 0.3s ease",
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f58220";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1f2a44";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Book Now
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "30px",
          top: "45%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "50%",
          padding: "15px",
          border: "none",
          color: "white",
          cursor: "pointer",
          zIndex: 20,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245,130,32,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.2)")}
      >
        <ChevronLeft size={45} strokeWidth={2} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "30px",
          top: "45%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "50%",
          padding: "15px",
          border: "none",
          color: "white",
          cursor: "pointer",
          zIndex: 20,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245,130,32,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.2)")}
      >
        <ChevronRight size={45} strokeWidth={2} />
      </button>

     
    </section>
  );
};




export default Hero;
