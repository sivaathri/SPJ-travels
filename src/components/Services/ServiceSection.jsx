import { motion } from "framer-motion";
import oneway from "../../assets/oneway.png";
import airport from "../../assets/airport.png";
import outstation from "../../assets/outstation.png";
import local from "../../assets/local.jpg";
import tourpackage from "../../assets/tourpackage.png";

const ServiceSection = () => {
  const services = [
    {
      id: "01.",
      title: "One Way Cab",
      img: oneway,
      desc: "Fast and reliable one-way drops to any city in South India."
    },
    {
      id: "02.",
      title: "Airport Cab",
      img: airport,
      desc: "Seamless transfers to Chennai, Madurai, and Trichy Airports."
    },
    {
      id: "03.",
      title: "Outstation Cab",
      img: outstation,
      desc: "Explore the Nilgiris and Western Ghats with our expert drivers."
    },
    {
      id: "04.",
      title: "Local Sightseeing",
      img: local,
      desc: "Experience the French charm of Pondicherry's White Town."
    },
    {
      id: "05.",
      title: "Tour Packages",
      img: tourpackage,
      desc: "All-inclusive spiritual and leisure tours across Tamil Nadu."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15 
      } 
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section style={containerStyle}>
      <div style={innerStyle}>
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "80px" }}
        >
            <h4 style={{ color: "#f58220", fontSize: "14px", fontWeight: 800, letterSpacing: "2px", marginBottom: "15px" }}>EXPERIENCE SOUTH INDIA</h4>
            <h2 style={{ fontSize: "48px", fontWeight: 900, color: "#1f2a44", marginBottom: "20px" }}>Services Across Tamil Nadu</h2>
            <div style={{ width: "80px", height: "4px", background: "#f58220", margin: "0 auto" }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={gridStyle}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -12 }}
              style={cardStyle}
            >
              <div style={imgContainerWrapper}>
                <motion.div 
                   whileHover={{ scale: 1.12 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   style={imgScaleContainer}
                >
                  <img src={s.img} alt={s.title} style={imgStyle} />
                </motion.div>
              </div>

              <motion.h3 
                style={titleStyle}
                whileHover={{ color: "#f58220" }}
              >
                <span style={{ color: "#f58220", marginRight: "8px" }}>{s.id}</span>
                {s.title}
              </motion.h3>

              <p style={descStyle}>{s.desc}</p>

              <motion.button 
                style={btnStyle}
                whileHover={{ letterSpacing: "3px", scale: 1.05 }}
              >
                BOOK NOW
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const containerStyle = {
  width: "100%",
  padding: "120px 20px",
  background: "#f1f5f9",
};

const innerStyle = {
  maxWidth: "1260px",
  margin: "0 auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "70px 45px",
  justifyContent: "center",
};

const cardStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  cursor: "pointer",
};

const imgContainerWrapper = {
  position: "relative",
  width: "100%",
  maxWidth: "420px",
  marginBottom: "35px",
};

const imgScaleContainer = {
    width: "100%",
    aspectRatio: "16 / 10",
    overflow: "hidden",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const titleStyle = {
  fontSize: "26px",
  fontWeight: 900,
  color: "#1f2a44",
  fontFamily: "'Poppins', sans-serif",
  margin: "0 0 12px 0",
};

const descStyle = {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: 1.7,
    maxWidth: "340px",
    margin: "0 auto 25px auto",
};

const btnStyle = {
  background: "transparent",
  border: "none",
  color: "#f58220",
  fontWeight: 800,
  fontSize: "14px",
  letterSpacing: "1.5px",
  cursor: "pointer",
  textTransform: "uppercase",
  transition: "all 0.3s",
};

export default ServiceSection;
