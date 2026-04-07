import { Phone, Mail, ArrowRight } from "lucide-react";
import logo from "../../assets/suriya_tours_logo.png";
import phoneIcon from "../../assets/24.png";


const Header = () => {
  return (
    <div
      style={{
        background: "#1f2a44",
        width: "100%",
        position: "relative",
        height: "130px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* ── White elongated banner with right-side wave tail ── */}
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))",
        }}
        aria-hidden="true"
      >
        <path
          d="M0,0 L1260,0 Q1340,0 1370,30 Q1400,60 1420,130 L0,130 Z"
          fill="white"
        />
      </svg>

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 32px",
          gap: "80px",
        }}
      >
        {/* LEFT: Logo + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="SPJ Tours Logo"
            style={{ width: "104px", height: "104px", objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{
                color: "#f58220",
                fontWeight: 900,
                fontSize: "40px",
                fontStyle: "italic",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "1px",
                marginLeft:"10px"
              }}
            >
              SPJ
            </span>
            <span
              style={{
                color: "#1f2a44",
                fontWeight: 800,
                fontSize: "19px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              TOURS &amp; Travels
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <img
            src={phoneIcon}
            alt="24/7 Support"
            style={{ width: "85px", height: "85px", objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                color: "#1f2a44",
                fontWeight: 600,
                fontSize: "20px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
               
                textUnderlineOffset: "4px",
                textDecorationThickness: "1px",
              }}
            >
              Please Make a call
            </span>
            <span
              style={{
                color: "#1f2a44",
                fontWeight: 900,
                fontSize: "24px",
                fontFamily: "Arial, sans-serif",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
                whiteSpace: "nowrap",
                letterSpacing: "1px",
              }}
            >
              99944 74049
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "42px",
            background: "#dde",
            flexShrink: 0,
          }}
        />

        {/* CENTER-RIGHT: Email */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <Mail
            size={38}
            color="#f58220"
            strokeWidth={1.5}
            style={{ flexShrink: 0 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#1f2a44",
                fontWeight: 700,
                fontSize: "17px",
                whiteSpace: "nowrap",
              }}
            >
              SPJtoursTravels@gmail.com
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#888",
                fontSize: "12px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {/* Checkmark circle */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke="#f58220"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 7l2 2 4-4"
                  stroke="#f58220"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              24/7 Service
            </span>
          </div>
        </div>

        {/* RIGHT: BOOK NOW */}
        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(245,130,32,0.7)";
            e.currentTarget.style.filter = "brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(245,130,32,0.5)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          style={{
            background: "linear-gradient(to right, #f58220, #e0660e)",
            color: "white",
            fontWeight: 900,
            fontSize: "15px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "40px",
            padding: "15px 30px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(245,130,32,0.5)",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          BOOK NOW
          <ArrowRight size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default Header;
