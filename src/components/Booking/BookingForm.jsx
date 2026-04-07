import { useState, useEffect } from "react";
import { 
  MapPin, 
  Phone, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  History,
  ShieldCheck,
  Zap,
  Users
} from "lucide-react";

const BookingForm = () => {
  const [tripType, setTripType] = useState("one-way");

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  // --- GOOGLE PLACES SERVICE ---
  const fetchGooglePlaces = (query, type) => {
    if (!query.trim() || !window.google) return;
    
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions({ 
      input: query, 
      componentRestrictions: { country: "in" } 
    }, (predictions, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        const formatted = predictions.map(p => ({
          title: p.structured_formatting.main_text,
          sub: p.structured_formatting.secondary_text
        }));
        type === "pickup" ? setPickupSuggestions(formatted) : setDropSuggestions(formatted);
      } else {
        type === "pickup" ? setPickupSuggestions([]) : setDropSuggestions([]);
      }
    });
  };

  const handlePickupChange = (val) => {
    setPickup(val);
    if (val.trim().length > 1) fetchGooglePlaces(val, "pickup");
    else setPickupSuggestions([]);
  };

  const handleDropChange = (val) => {
    setDrop(val);
    if (val.trim().length > 1) fetchGooglePlaces(val, "drop");
    else setDropSuggestions([]);
  };

  const timeOptions = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const p = h >= 12 ? "PM" : "AM";
      const hours = h % 12 === 0 ? 12 : h % 12;
      const mins = m === 0 ? "00" : m;
      timeOptions.push(`${hours}:${mins} ${p}`);
    }
  }

  return (
    <section 
      style={{
        width: "100%",
        padding: "0 20px 60px 20px",
        marginTop: "-150px",
        position: "relative",
        zIndex: 30,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div 
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          background: "white",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div style={{ flex: "1 1 100%", padding: "50px 60px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "35px" }}>
            <div style={{ background: "#f8fafc", padding: "6px", borderRadius: "12px", display: "flex", border: "1px solid #e2e8f0" }}>
              <button onClick={() => setTripType("one-way")} style={tripType === "one-way" ? activeToggleStyle : inactiveToggleStyle}>
                <ArrowRight size={18} /> One Way
              </button>
              <button onClick={() => setTripType("round-trip")} style={tripType === "round-trip" ? activeToggleStyle : inactiveToggleStyle}>
                <History size={18} /> Round Trip
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "25px" }}>
            {/* Pickup */}
            <div style={{ position: "relative" }}>
              <label style={labelStyle}>Pick-up Location <span style={{ color: "#ef4444" }}>*</span></label>
              <div style={inputContainerStyle}>
                <MapPin size={20} color="#10b981" style={{ position: "absolute", left: "15px" }} />
                <input type="text" value={pickup} onChange={(e) => handlePickupChange(e.target.value)} placeholder="Enter pickup address or city" style={inputStyle} />
              </div>
              {pickupSuggestions.length > 0 && (
                <div style={suggestionListStyle}>
                  {pickupSuggestions.map((loc, i) => (
                    <div key={i} onClick={() => { setPickup(loc.title); setPickupSuggestions([]); }} onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"} onMouseLeave={(e) => e.currentTarget.style.background = "white"} style={suggestionItemStyle}>
                      <MapPin size={16} color="#94a3b8" style={{ marginRight: "12px", marginTop: "4px" }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: 700, color: "#1e293b", fontSize: "15px" }}>{loc.title}</span>
                        <span style={{ marginLeft: "8px", color: "#64748b", fontSize: "13px" }}>{loc.sub}</span>
                      </div>
                    </div>
                  ))}
                  <div style={googleBrandingStyle}>
                    <span>powered by</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: "14px", marginLeft: "6px" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Drop */}
            <div style={{ position: "relative" }}>
              <label style={labelStyle}>Drop Location <span style={{ color: "#ef4444" }}>*</span></label>
              <div style={inputContainerStyle}>
                <MapPin size={20} color="#ef4444" style={{ position: "absolute", left: "15px" }} />
                <input type="text" value={drop} onChange={(e) => handleDropChange(e.target.value)} placeholder="Enter drop address or city" style={inputStyle} />
              </div>
              {dropSuggestions.length > 0 && (
                <div style={suggestionListStyle}>
                  {dropSuggestions.map((loc, i) => (
                    <div key={i} onClick={() => { setDrop(loc.title); setDropSuggestions([]); }} onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"} onMouseLeave={(e) => e.currentTarget.style.background = "white"} style={suggestionItemStyle}>
                      <MapPin size={16} color="#94a3b8" style={{ marginRight: "12px", marginTop: "4px" }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: 700, color: "#1e293b", fontSize: "15px" }}>{loc.title}</span>
                        <span style={{ marginLeft: "8px", color: "#64748b", fontSize: "13px" }}>{loc.sub}</span>
                      </div>
                    </div>
                  ))}
                  <div style={googleBrandingStyle}>
                    <span>powered by</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: "14px", marginLeft: "6px" }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Enter Your Mobile Number <span style={{ color: "#ef4444" }}>*</span></label>
            <div style={inputContainerStyle}>
              <div style={{ position: "absolute", left: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} color="#64748b" />
                <span style={{ fontWeight: 700, color: "#1f2a44", borderRight: "1px solid #d1d5db", paddingRight: "10px" }}>+91</span>
              </div>
              <input type="tel" placeholder="Enter 10-digit mobile number" style={{ ...inputStyle, paddingLeft: "100px" }} />
            </div>
          </div>

          {tripType === "one-way" ? (
             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "35px" }}>
               <div>
                 <label style={labelStyle}>Date <span style={{ color: "#ef4444" }}>*</span></label>
                 <div style={inputContainerStyle}><Calendar size={20} color="#64748b" style={{ position: "absolute", left: "15px" }} /><input type="date" style={inputStyle} /></div>
                 <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 48px" }}>DD / MM / YYYY</p>
               </div>
               <div>
                 <label style={labelStyle}>Time</label>
                 <div style={inputContainerStyle}><Clock size={20} color="#64748b" style={{ position: "absolute", left: "15px" }} /><select style={{ ...inputStyle, appearance: "none" }}>{timeOptions.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
               </div>
             </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "25px" }}>
                <div>
                  <label style={labelStyle}>Pickup Date <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={inputContainerStyle}><Calendar size={20} color="#10b981" style={{ position: "absolute", left: "15px" }} /><input type="date" style={inputStyle} /></div>
                  <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 48px" }}>DD / MM / YYYY</p>
                </div>
                <div>
                  <label style={labelStyle}>Pickup Time <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={inputContainerStyle}><Clock size={20} color="#10b981" style={{ position: "absolute", left: "15px" }} /><select style={{ ...inputStyle, appearance: "none" }}>{timeOptions.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "35px" }}>
                <div>
                  <label style={labelStyle}>Return Date <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={inputContainerStyle}><Calendar size={20} color="#ef4444" style={{ position: "absolute", left: "15px" }} /><input type="date" style={inputStyle} /></div>
                  <p style={{ fontSize: "11px", color: "#94a3b8", margin: "4px 0 0 48px" }}>DD / MM / YYYY</p>
                </div>
                <div>
                  <label style={labelStyle}>Return Time <span style={{ color: "#ef4444" }}>*</span></label>
                  <div style={inputContainerStyle}><Clock size={20} color="#ef4444" style={{ position: "absolute", left: "15px" }} /><select style={{ ...inputStyle, appearance: "none" }}>{timeOptions.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                </div>
              </div>
            </>
          )}

          <div style={alertBoxStyle}>
            <Info size={20} color="#3b82f6" fill="#3b82f6" stroke="white" />
            <p style={{ margin: 0, fontSize: "14px", color: "#1e40af", fontWeight: 500 }}>You will receive driver details once your booking is confirmed.</p>
          </div>

          <button style={bookButtonStyle} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.background = "#1e3a8a"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#1f2a44"; }}>
            Book Now <ArrowRight size={22} />
          </button>

          <div style={footerSecureStyle}><CheckCircle2 size={16} color="#10b981" />Your details are secure and will not be shared with anyone.</div>
        </div>
      </div>
    </section>
  );
};

const labelStyle = { display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#475569" };
const inputContainerStyle = { position: "relative", display: "flex", alignItems: "center" };
const inputStyle = { width: "100%", padding: "16px 16px 16px 48px", borderRadius: "15px", border: "1.5px solid #e2e8f0", fontSize: "15px", color: "#1e293b", outline: "none", background: "white" };
const suggestionListStyle = { position: "absolute", top: "100%", left: 0, right: 0, background: "white", border: "1px solid #e2e8f0", borderRadius: "15px", marginTop: "8px", maxHeight: "350px", overflowY: "auto", zIndex: 1000, boxShadow: "0 15px 45px rgba(0,0,0,0.15)", padding: "5px 0" };
const suggestionItemStyle = { padding: "15px 20px", cursor: "pointer", display: "flex", alignItems: "flex-start", borderBottom: "1px solid #f1f5f9", background: "white" };
const googleBrandingStyle = { padding: "10px 15px", textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", color: "#94a3b8", fontSize: "12px", background: "#f8fafc" };
const activeToggleStyle = { padding: "12px 30px", borderRadius: "10px", border: "none", fontWeight: 700, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.3s", background: "#1f2a44", color: "white" };
const inactiveToggleStyle = { padding: "12px 30px", borderRadius: "10px", border: "none", fontWeight: 700, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.3s", background: "transparent", color: "#64748b" };
const alertBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", padding: "15px 20px", borderRadius: "15px", display: "flex", alignItems: "center", gap: "12px", marginBottom: "35px" };
const bookButtonStyle = { width: "100%", background: "#1f2a44", color: "white", padding: "20px", borderRadius: "15px", border: "none", fontSize: "18px", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", transition: "transform 0.2s, background 0.2s", boxShadow: "0 10px 25px -5px rgba(31, 42, 68, 0.4)" };
const footerSecureStyle = { display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "30px", color: "#64748b", fontSize: "13px" };

export default BookingForm;
