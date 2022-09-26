import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchForm from "./SearchForm";
import Alerts from "./Alerts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container main-box background-images">
        <SearchForm defaultCity="Denver" />
      </div>
      <Alerts />
      <Footer />
    </div>
  );
}

export default App;
