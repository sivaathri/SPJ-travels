import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "TARIFF", path: "/tariff" }, 
    { label: "CONTACT US", path: "/contact" }
  ];

  return (
    <div style={{ background: "#1f2a44", position: "relative", zIndex: 20 }}>

      {/* Nav links row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "52px",
          padding: "0 0 0 160px",
        }}
      >
        {navItems.map((item, idx) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={item.path}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 800,
                fontSize: "16px",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "5px",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "0 32px",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f58220"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
            >
              {item.label}
            </Link>
            {idx < navItems.length - 1 && (
              <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.3)" }} />
            )}
          </div>
        ))}
      </div>

      {/* Orange wave */}
      <div style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 26"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "26px" }}
        >
          <path d="M0 0 C480 26 960 26 1440 0 L1440 26 L0 26 Z" fill="#f58220" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
