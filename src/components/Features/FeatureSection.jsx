import { Phone, Zap, ShieldCheck, Users } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      title: "24x7 Support",
      desc: "Round-the-clock assistance for all your journeys.",
      icon: <Phone size={24} color="#10b981" />,
      bg: "#f0fdf4"
    },
    {
      title: "Affordable Price",
      desc: "Budget-friendly rates with no hidden charges.",
      icon: <Zap size={24} color="#f59e0b" />,
      bg: "#fffbeb"
    },
    {
      title: "Sanitized Cab",
      desc: "Regular cleaning and mandatory safety protocols.",
      icon: <ShieldCheck size={24} color="#3b82f6" />,
      bg: "#eff6ff"
    },
    {
      title: "Expert Drivers",
      desc: "Professional, vetted drivers for a safe ride.",
      icon: <Users size={24} color="#ec4899" />,
      bg: "#fdf2f8"
    }
  ];

  return (
    <section style={containerStyle}>
      <div style={innerStyle}>
        <div style={gridStyle}>
          {features.map((f, i) => (
            <div key={i} style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ ...iconContainerStyle, background: f.bg }}>
                {f.icon}
              </div>
              <h3 style={titleStyle}>{f.title}</h3>
              <p style={descStyle}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  width: "100%",
  padding: "80px 20px",
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "white",
  padding: "40px 30px",
  borderRadius: "24px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease",
  cursor: "default",
};

const iconContainerStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 25px auto",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  color: "#1f2a44",
  marginBottom: "12px",
};

const descStyle = {
  fontSize: "15px",
  color: "#64748b",
  lineHeight: 1.6,
};

export default FeatureSection;
