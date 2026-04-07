import Header from "../components/Header/HeaderContact";
import Navbar from "../components/Header/Navbar";
import TariffSection from "../components/Tariff/TariffSection";
import Footer from "../components/Footer/Footer";

const TariffPage = () => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <Navbar />
            <div style={{ paddingTop: "60px", background: "#1f2a44" }}>
                <div style={heroSubPageStyle}>
                    <h1 style={titleStyle}>Our Tariff</h1>
                    <p style={breadcrumbStyle}>Home / Tariff Card</p>
                </div>
            </div>
            <div style={{ background: "#f8fafc" }}>
                <TariffSection />
            </div>
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

export default TariffPage;
