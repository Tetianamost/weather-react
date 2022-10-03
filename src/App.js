import React from "react";
import StarSky from "react-star-sky";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchForm from "./SearchForm";
import Alerts from "./Alerts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <StarSky>
        <div className="container main-box background-images">
          <SearchForm defaultCity="Denver" />
        </div>
        <Alerts />
        <Footer />
      </StarSky>
    </div>
  );
}

export default App;
