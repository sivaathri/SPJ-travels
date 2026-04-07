import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import footerBg from "../../assets/hero_bg.png"; // Using the city skyline for the original feel

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={gridStyle}>
          {/* Col 1: Logo & Tagline */}
          <div style={colStyle}>
            <div style={logoContainerStyle}>
              {/* Re-using the premium text logo style for SPJ */}
              <div
                style={{
                  color: "white",
                  fontSize: "28px",
                  fontWeight: 900,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                SPJ <span style={{ color: "#fbbf24" }}>TOURS</span>
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginTop: "5px",
                }}
              >
                24/7 Cab Service
              </div>
            </div>
          </div>

          {/* Col 2: About Company (Staggered List) */}
          <div style={colStyle}>
            <h3 style={colTitleStyle}>About Company</h3>
            <div style={aboutGridStyle}>
              <div style={linkRowStyle}>
                <div style={linkItemStyle}>
                  <ChevronRight size={14} color="rgba(255,255,255,0.7)" />
                  <span>Home</span>
                </div>
                <div style={linkItemStyle}>
                  <ChevronRight size={14} color="rgba(255,255,255,0.7)" />
                  <span>Tariff</span>
                </div>
              </div>
              <div style={linkItemStyle}>
                <ChevronRight size={14} color="rgba(255,255,255,0.7)" />
                <span>Contact Us</span>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Us (Bulleted List) */}
          <div style={colStyle}>
            <h3 style={colTitleStyle}>Contact Us</h3>
            <ul style={contactListStyle}>
              <li style={contactListItemStyle}>
                <div style={bulletStyle}></div>
                <span>
                  No 17, Thoppu Street, T.n.Palayam, <br />
                  Puducherry.
                </span>
              </li>
              <li style={contactListItemStyle}>
                <div style={bulletStyle}></div>
                <span>
                  Tel :{" "}
                  <a href="tel:+918270246007" style={linkStyle}>
                    +91 82702 46007
                  </a>
                </span>
              </li>
              <li style={contactListItemStyle}>
                <div style={bulletStyle}></div>
                <span>
                  Email :{" "}
                  <a
                    href="mailto:booking.pondycabs@gmail.com"
                    style={linkStyle}
                  >
                    booking.pondycabs@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Bottom Bar */}
      <div style={bottomBarStyle}>
        <div style={innerStyle}>
          <p style={copyStyle}>
            © 2026,{" "}
            <a 
              href="https://pondyitsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}
            >
              Pondy IT Solutions
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  width: "100%",
  position: "relative",
  background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${footerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "80px 20px 0 20px",
  color: "white",
  fontFamily: "'Poppins', sans-serif",
  repeat: "no-repeat",
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "60px",
  paddingBottom: "80px",
};

const colStyle = {
  display: "flex",
  flexDirection: "column",
};

const logoContainerStyle = {
  marginBottom: "20px",
};

const colTitleStyle = {
  fontSize: "22px",
  fontWeight: 700,
  marginBottom: "35px",
  letterSpacing: "0.5px",
};

const aboutGridStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const linkRowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

const linkItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "15px",
  color: "rgba(255,255,255,0.8)",
  cursor: "pointer",
  transition: "color 0.3s",
};

const contactListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const contactListItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  fontSize: "15px",
  color: "rgba(255,255,255,0.8)",
  lineHeight: 1.6,
};

const bulletStyle = {
  width: "6px",
  height: "6px",
  background: "white",
  borderRadius: "50%",
  marginTop: "8px",
  flexShrink: 0,
};

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  fontWeight: 500,
};

const bottomBarStyle = {
  background: "rgba(0,0,0,0.4)",
  padding: "25px 0",
  textAlign: "center",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const copyStyle = {
  fontSize: "14px",
  color: "rgba(255,255,255,0.7)",
  margin: 0,
};

export default Footer;
