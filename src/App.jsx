import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import TariffPage from "./pages/TariffPage";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tariff" element={<TariffPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
