import { MapPin, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section style={containerStyle}>
      <div style={innerStyle}>
        <div style={gridStyle}>
          {/* Left Side: Content */}
          <div style={contentStyle}>
            <div style={tagStyle}>
              <MapPin size={16} color="#1f2a44" />
              <span>Suriya Tours & Cabs</span>
            </div>
            <h2 style={headingStyle}>Your Reliable Partner for Every Journey</h2>
            <p style={paragraphStyle}>
              At Suriya Tours & Cabs, we believe that travel should be more than just a destination—it should be a seamless, safe, and enjoyable experience. With years of expertise in the travel industry, we have become one of the most trusted cab services in Pondicherry and South India.
            </p>
            <p style={paragraphStyle}>
              Whether you're planning a local sightseeing tour, an outstation trip, or a quick airport drop, our fleet of modern, sanitized vehicles and professional drivers are here to serve you efficiently, 24/7.
            </p>

            <div style={featureGridStyle}>
              <div style={miniFeatureStyle}>
                <CheckCircle size={20} color="#10b981" />
                <span style={miniFeatureTextStyle}>Premium Fleet & Clean Vehicles</span>
              </div>
              <div style={miniFeatureStyle}>
                <CheckCircle size={20} color="#10b981" />
                <span style={miniFeatureTextStyle}>Transparent & Affordable Pricing</span>
              </div>
              <div style={miniFeatureStyle}>
                <CheckCircle size={20} color="#10b981" />
                <span style={miniFeatureTextStyle}>Expert & Courteous Drivers</span>
              </div>
              <div style={miniFeatureStyle}>
                <CheckCircle size={20} color="#10b981" />
                <span style={miniFeatureTextStyle}>Safety First Protocols</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image Placeholder or Visual */}
          <div style={visualContainerStyle}>
             <div style={imageWrapperStyle}>
                 {/* This would be a real image of a cab or Pondy tour */}
                 <div style={imageOverlayStyle}></div>
                 <div style={statBoxStyle}>
                    <div style={{ fontSize: "40px", fontWeight: 800, color: "white" }}>10+</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Years experience</div>
                 </div>
             </div>
          </div>
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "60px",
  alignItems: "center",
};

const contentStyle = {
  textAlign: "left",
};

const tagStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  background: "#f1f5f9",
  padding: "8px 20px",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: 700,
  color: "#1f2a44",
  marginBottom: "25px",
};

const headingStyle = {
  fontSize: "42px",
  fontWeight: 800,
  color: "#1f2a44",
  lineHeight: 1.2,
  marginBottom: "30px",
};

const paragraphStyle = {
  fontSize: "17px",
  color: "#64748b",
  lineHeight: 1.8,
  marginBottom: "20px",
};

const featureGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "40px",
};

const miniFeatureStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const miniFeatureTextStyle = {
  fontSize: "15px",
  fontWeight: 700,
  color: "#1e293b",
};

const visualContainerStyle = {
  position: "relative",
};

const imageWrapperStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "32px",
  background: "linear-gradient(135deg, #1f2a44 0%, #1e3a8a 100%)",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 30px 60px -12px rgba(0,0,0,0.25)",
};

const imageOverlayStyle = {
    position: "absolute",
    inset: 0,
    background: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop') center/cover",
    opacity: 0.8,
};

const statBoxStyle = {
    position: "absolute",
    bottom: "40px",
    left: "40px",
    background: "#1f2a44",
    padding: "30px 40px",
    borderRadius: "24px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
};

export default AboutSection;
