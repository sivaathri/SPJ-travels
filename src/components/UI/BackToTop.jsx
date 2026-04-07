import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          style={btnStyle}
          whileHover={{ scale: 1.1, backgroundColor: "#1f2a44" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const btnStyle = {
  position: "fixed",
  bottom: "40px",
  right: "40px",
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  background: "#f58220",
  color: "white",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 25px rgba(245, 130, 32, 0.4)",
  zIndex: 1000,
  transition: "background-color 0.3s",
};

export default BackToTop;
