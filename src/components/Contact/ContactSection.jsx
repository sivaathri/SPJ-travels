import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import contactImg from "../../assets/local.jpg"; 

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" style={containerStyle}>
      <div style={innerStyle}>
        
        {/* NEW TOP SECTION MATCHING IMAGE */}
        <div style={topHeaderStyle}>
          <h4 style={taglineStyle}>Contact</h4>
          <h2 style={headingStyle}>Contact Us</h2>
        </div>

        <div style={topInfoGrid}>
          {/* Left Side: Info & Buttons */}
          <div style={topInfoCol}>
            <div style={infoGroupRow}>
               <div style={infoGroup}>
                  <h3 style={infoTitleStyle}>Address</h3>
                  <p style={infoTextStyle}>No 17, Thoppu Street, T.n.Palayam, Puducherry.</p>
               </div>
               <div style={infoGroup}>
                  <h3 style={infoTitleStyle}>Phone</h3>
                  <p style={infoTextStyle}>+91 82702 46007</p>
                  <h3 style={{...infoTitleStyle, marginTop: "20px"}}>Email</h3>
                  <p style={infoTextStyle}>booking.pondycabs@gmail.com</p>
               </div>
            </div>

            <div style={btnRowStyle}>
               <button style={callBtnStyle}>
                  Call Now <ArrowRight size={18} />
               </button>
               <button 
                style={bookBtnStyle}
                onClick={() => navigate("/")}
               >
                  Book Now <ArrowRight size={18} />
               </button>
            </div>
          </div>

          {/* Right Side: Building Image */}
          <div style={imgColStyle}>
             <img src={contactImg} alt="Contact Office" style={heroImgStyle} />
          </div>
        </div>

        {/* Head of the Form Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{...headerStyle, marginTop: "120px"}}
        >
            <h4 style={taglineStyle}>SEND A MESSAGE</h4>
            <h2 style={headingStyle}>Get In Touch With Us</h2>
            <div style={dividerStyle}></div>
        </motion.div>

        <div style={gridStyle}>
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={formColStyle}
          >
            <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
              <div style={inputGroupStyle}>
                <div style={inputWrapperStyle}>
                   <label style={labelStyle}>Full Name</label>
                   <input type="text" placeholder="Your Name" style={inputStyle} />
                </div>
                <div style={inputWrapperStyle}>
                   <label style={labelStyle}>Email Address</label>
                   <input type="email" placeholder="Your Email" style={inputStyle} />
                </div>
              </div>

              <div style={inputWrapperStyle}>
                <label style={labelStyle}>Your Message</label>
                <textarea placeholder="How can we help you?" style={textAreaStyle}></textarea>
              </div>

              <button style={submitBtnStyle}>
                 <Send size={18} />
                 <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <div style={mapColStyle}>
            <div style={mapWrapperStyle}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124933.10931215423!2d79.7335607065918!3d11.90565814524458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfbf%3A0x110a26639d6cfc84!2sPuducherry!5e0!3m2!1sen!2sin!4v1714995400000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
  maxWidth: "1250px",
  margin: "0 auto",
};

const topHeaderStyle = {
    textAlign: "center",
    marginBottom: "60px",
};

const taglineStyle = {
    color: "#f58220",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: "10px",
};

const headingStyle = {
    fontSize: "42px",
    fontWeight: 900,
    color: "#1e293b",
    margin: 0,
};

const topInfoGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
    marginBottom: "100px",
};

const topInfoCol = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
};

const infoGroupRow = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
};

const infoGroup = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
};

const infoTitleStyle = {
    fontSize: "22px",
    fontWeight: 800,
    color: "#1e293b",
    marginBottom: "5px",
};

const infoTextStyle = {
    fontSize: "16px",
    color: "#64748b",
    lineHeight: 1.6,
    fontWeight: 500,
};

const btnRowStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
};

const callBtnStyle = {
    background: "#fbbf24",
    color: "#1e293b",
    border: "none",
    padding: "16px 40px",
    borderRadius: "4px",
    fontWeight: 900,
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    textTransform: "uppercase",
};

const bookBtnStyle = {
    ...callBtnStyle,
    background: "#1f2a44",
    color: "white",
};

const imgColStyle = {
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
};

const heroImgStyle = {
    width: "100%",
    height: "auto",
    display: "block",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "80px",
};

const dividerStyle = {
  width: "80px",
  height: "5px",
  background: "#fbbf24",
  margin: "0 auto",
  borderRadius: "10px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "50px",
};

const formColStyle = {
  background: "#f8f9fa",
  padding: "50px",
  borderRadius: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
};

const inputGroupStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const inputWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#1e293b",
};

const inputStyle = {
  width: "100%",
  padding: "15px 20px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  outline: "none",
  background: "white",
  fontSize: "14px",
};

const textAreaStyle = {
  ...inputStyle,
  height: "120px",
  resize: "none",
};

const submitBtnStyle = {
  background: "#1f2a44",
  color: "white",
  border: "none",
  padding: "15px 30px",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

const mapColStyle = {
    width: "100%",
};

const mapWrapperStyle = {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
};

export default ContactSection;
