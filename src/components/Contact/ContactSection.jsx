import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" style={containerStyle}>
      <div style={innerStyle}>
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={headerStyle}
        >
            <h4 style={taglineStyle}>CONTACT US</h4>
            <h2 style={headingStyle}>Get In Touch With Us</h2>
            <div style={dividerStyle}></div>
        </motion.div>

        <div style={gridStyle}>
          {/* Left Side: Contact Form */}
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

              <div style={inputGroupStyle}>
                <div style={inputWrapperStyle}>
                   <label style={labelStyle}>Phone Number</label>
                   <input type="tel" placeholder="Your Phone" style={inputStyle} />
                </div>
                <div style={inputWrapperStyle}>
                   <label style={labelStyle}>Subject</label>
                   <input type="text" placeholder="General Inquiry" style={inputStyle} />
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

          {/* Right Side: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={infoColStyle}
          >
            <div style={infoBoxRow}>
               <div style={infoCardStyle}>
                  <div style={iconBoxStyle}><Phone size={24} color="#f58220" /></div>
                  <div>
                    <div style={infoLabel}>Call Us</div>
                    <div style={infoValue}>+91 82702 46007</div>
                  </div>
               </div>
               <div style={infoCardStyle}>
                  <div style={iconBoxStyle}><Mail size={24} color="#f58220" /></div>
                  <div>
                    <div style={infoLabel}>Email Us</div>
                    <div style={infoValue}>booking@spjtravels.com</div>
                  </div>
               </div>
            </div>

            <div style={infoCardStyle}>
               <div style={iconBoxStyle}><MapPin size={24} color="#f58220" /></div>
               <div>
                 <div style={infoLabel}>Location</div>
                 <div style={infoValue}>No 17, Thoppu Street, T.n.Palayam, Puducherry.</div>
               </div>
            </div>

            {/* Embedded Google Map */}
            <div style={mapWrapperStyle}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124933.10931215423!2d79.7335607065918!3d11.90565814524458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfbf%3A0x110a26639d6cfc84!2sPuducherry!5e0!3m2!1sen!2sin!4v1714995400000!5m2!1sen!2sin" 
                width="100%" 
                height="280" 
                style={{ border: 0, borderRadius: "20px" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  width: "100%",
  padding: "120px 20px",
  background: "#f8fafc",
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "80px",
};

const taglineStyle = {
  color: "#f58220",
  fontSize: "14px",
  fontWeight: 800,
  letterSpacing: "2px",
  marginBottom: "15px",
};

const headingStyle = {
  fontSize: "48px",
  fontWeight: 900,
  color: "#1f2a44",
  marginBottom: "20px",
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
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  gap: "60px",
  alignItems: "start",
};

const formColStyle = {
  background: "white",
  padding: "50px",
  borderRadius: "32px",
  boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
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
  marginLeft: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "18px 25px",
  borderRadius: "15px",
  border: "2px solid #f1f5f9",
  outline: "none",
  background: "#f8fafc",
  transition: "all 0.3s",
  fontSize: "15px",
};

const textAreaStyle = {
  ...inputStyle,
  height: "150px",
  resize: "none",
};

const submitBtnStyle = {
  background: "#1f2a44",
  color: "white",
  border: "none",
  padding: "20px 40px",
  borderRadius: "15px",
  fontWeight: 700,
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  transition: "all 0.3s",
};

const infoColStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const infoBoxRow = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
};

const infoCardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
};

const iconBoxStyle = {
    width: "60px",
    height: "60px",
    background: "#fff7ed",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const infoLabel = {
    fontSize: "13px",
    color: "#64748b",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
};

const infoValue = {
    fontSize: "16px",
    color: "#1e293b",
    fontWeight: 700,
    marginTop: "4px",
};

const mapWrapperStyle = {
    width: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    border: "8px solid white",
};

export default ContactSection;
