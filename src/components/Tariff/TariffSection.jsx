import v1 from "../../assets/24.png"; // Icon
import v2 from "../../assets/242.png"; // Icon 
import v3 from "../../assets/244.png"; // Icon
// Back to vehicles
import oneway from "../../assets/oneway.png";
import outstation from "../../assets/outstation.png";
import airport from "../../assets/airport.png";
import { ArrowRight } from "lucide-react";

const TariffSection = () => {
  const tariffs = [
    {
      img: oneway,
      type: "ONE WAY",
      title: "Sedan (Dzire/Etios)",
      price: "14",
      details: [
        "Round Trip - Rs. 13",
        "Driver Allowance - Rs. 400",
        "One Way - Minimum 130 Km",
        "Round Trip - Minimum 250 Km"
      ]
    },
    {
      img: outstation,
      type: "ONE WAY",
      title: "SUV(Xylo/Ertiga)",
      price: "19",
      details: [
        "Round Trip - Rs. 17",
        "Driver Allowance - Rs. 500",
        "One Way - Minimum 130 Km",
        "Round Trip - Minimum 250 Km"
      ]
    },
    {
      img: airport,
      type: "ONE WAY",
      title: "Assured Innova",
      price: "20",
      details: [
        "Round Trip - 18",
        "Driver Allowance - Rs. 500",
        "One Way - Minimum 130 Km",
        "Round Trip - Minimum 130 Km"
      ]
    }
  ];

  return (
    <section style={containerStyle}>
      <div style={innerStyle}>
        <div style={headerStyle}>
          <div style={taglineContainer}>
             <span style={dotStyle}></span>
             <h4 style={taglineStyle}>LOWEST PRICES</h4>
          </div>
          <h2 style={headingStyle}>Our Tariff</h2>
        </div>

        <div style={gridStyle}>
          {tariffs.map((t, i) => (
            <div key={i} style={cardStyle}>
              {/* Image at Top */}
              <div style={imgWrapperStyle}>
                <img src={t.img} alt={t.title} style={imgStyle} />
              </div>

              {/* Card Body */}
              <div style={cardBodyStyle}>
                <span style={typeLabelStyle}>{t.type}</span>
                <h3 style={cardTitleStyle}>{t.title}</h3>
                
                <div style={priceContainerStyle}>
                  <span style={rsStyle}>Rs.</span>
                  <span style={priceNumberStyle}>{t.price}</span>
                  <span style={perKmStyle}>/per km</span>
                </div>

                <div style={detailsListStyle}>
                   {t.details.map((detail, dIdx) => (
                     <div key={dIdx} style={detailItemStyle}>{detail}</div>
                   ))}
                </div>

                <button style={bookBtnStyle}>
                  BOOK NOW <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  width: "100%",
  padding: "100px 20px",
  background: "#f1f5f9", // Light gray background
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "80px",
};

const taglineContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
};

const dotStyle = {
    width: "8px",
    height: "8px",
    background: "#f58220",
    borderRadius: "50%",
};

const taglineStyle = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "1px",
  margin: 0,
};

const headingStyle = {
  fontSize: "48px",
  fontWeight: 900,
  color: "#1e293b",
  margin: 0,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "30px",
  justifyContent: "center",
};

const cardStyle = {
    background: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
};

const imgWrapperStyle = {
    width: "100%",
    maxWidth: "280px",
    marginBottom: "30px",
};

const imgStyle = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
};

const cardBodyStyle = {
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const typeLabelStyle = {
    color: "#f58220",
    fontSize: "14px",
    fontWeight: 800,
    marginBottom: "10px",
    letterSpacing: "1px",
};

const cardTitleStyle = {
    fontSize: "24px",
    fontWeight: 800,
    color: "#1e293b",
    marginBottom: "25px",
};

const priceContainerStyle = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: "30px",
    gap: "4px",
};

const rsStyle = {
    fontSize: "24px",
    fontWeight: 400,
    color: "#1e293b",
};

const priceNumberStyle = {
    fontSize: "64px",
    fontWeight: 600,
    color: "#334155",
    lineHeight: 1,
};

const perKmStyle = {
    fontSize: "16px",
    color: "#64748b",
    fontWeight: 500,
};

const detailsListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "40px",
};

const detailItemStyle = {
    fontSize: "15px",
    color: "#64748b",
    fontWeight: 500,
};

const bookBtnStyle = {
    background: "#f58220",
    color: "white",
    border: "none",
    padding: "16px 45px",
    borderRadius: "10px",
    fontWeight: 800,
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    transition: "background 0.3s",
};

export default TariffSection;
