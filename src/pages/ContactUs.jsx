import Header from "../components/Header/HeaderContact";
import Navbar from "../components/Header/Navbar";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

const ContactUs = () => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <Navbar />
            <div style={{ paddingTop: "60px", background: "#1f2a44" }}>
                {/* Visual Header for the subpage */}
                <div style={heroSubPageStyle}>
                    <h1 style={titleStyle}>Contact Us</h1>
                    <p style={breadcrumbStyle}>Home / Contact Us</p>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </>
    );
};

const heroSubPageStyle = {
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
};

const titleStyle = {
    color: "white",
    fontSize: "52px",
    fontWeight: 900,
    marginBottom: "10px",
};

const breadcrumbStyle = {
    color: "rgba(255,255,255,0.7)",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "1px",
};

export default ContactUs;
