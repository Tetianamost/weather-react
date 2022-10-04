import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="App"
    >
      <div className="container main-box background-images">
        <SearchForm defaultCity="Denver" />
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;
