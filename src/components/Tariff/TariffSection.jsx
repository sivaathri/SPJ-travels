import oneway from "../../assets/oneway.png";
import outstation from "../../assets/outstation.png";
import airport from "../../assets/airport.png";

const TariffSection = () => {
  const tariffs = [
    {
      img: oneway,
      title: "Sedan (Dzire, Etios)",
      price: "14",
      oneWay: "One Way",
      roundTrip: "Round Trip - Rs. 13",
      allowance: "Driver Allowance - Rs. 300"
    },
    {
      img: outstation,
      title: "SUV (Xylo, Ertiga)",
      price: "19",
      oneWay: "One Way",
      roundTrip: "Round Trip - Rs. 17",
      allowance: "Driver Allowance - Rs. 400"
    },
    {
      img: airport,
      title: "Assured Innova",
      price: "20",
      oneWay: "One Way",
      roundTrip: "Round Trip - Rs. 18",
      allowance: "Driver Allowance - Rs. 400"
    }
  ];

  return (
    <section style={containerStyle}>
      <div style={innerStyle}>
        <div style={headerStyle}>
          <h4 style={taglineStyle}>Tariff</h4>
          <h2 style={headingStyle}>Our Tariff</h2>
        </div>

        <div style={gridStyle}>
          {tariffs.map((t, i) => (
            <div key={i} style={cardStyle}>
              {/* Image at Top - High Z-index to float over content box */}
              <div style={imgWrapperStyle}>
                <img src={t.img} alt={t.title} style={imgStyle} />
              </div>

              {/* Content Box - Light Gray with Shadow */}
              <div style={contentBoxStyle}>
                <h3 style={cardTitleStyle}>{t.title}</h3>
                
                <div style={priceContainerStyle}>
                  <span style={rsStyle}>Rs.</span>
                  <span style={priceNumberStyle}>{t.price}</span>
                </div>

                <div style={detailsListStyle}>
                   <div style={detailItemStyle}>{t.oneWay}</div>
                   <div style={detailItemStyle}>{t.roundTrip}</div>
                   <div style={detailItemStyle}>{t.allowance}</div>
                </div>
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
  background: "white",
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "100px",
};

const taglineStyle = {
  color: "#f58220",
  fontSize: "14px",
  fontWeight: 700,
  margin: "0 0 10px 0",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: 900,
  color: "#1e293b",
  margin: 0,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px",
  justifyContent: "center",
  alignItems: "end", // Align cards to bottom like reference images
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
};

const imgWrapperStyle = {
    width: "100%",
    maxWidth: "360px",
    marginBottom: "-30px", // Increased overlap to match the float feel
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
};

const imgStyle = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
};

const contentBoxStyle = {
    width: "100%",
    background: "#f8f9fa",
    padding: "60px 30px 40px 30px",
    borderRadius: "12px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
};

const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: 800,
    color: "#1e293b",
    marginBottom: "15px",
};

const priceContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "30px",
    gap: "5px",
};

const rsStyle = {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1e293b",
    marginTop: "8px",
};

const priceNumberStyle = {
    fontSize: "52px",
    fontWeight: 900,
    color: "#1e293b",
    lineHeight: 1,
};

const detailsListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "40px",
};

const detailItemStyle = {
    fontSize: "15px",
    color: "#64748b",
    fontWeight: 500,
};

export default TariffSection;
