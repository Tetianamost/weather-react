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
      <StarSky
        pageBackground={true}
        style={{ opacity: 0.5 }}
        shuffle={true}
        frameRate={20}
        className={("container", "main-box")}
        starColor={(103, 245, 249)}
        backgroundColor={[56, 40, 92]}
      />
      <div className="container main-box background-images">
        <SearchForm defaultCity="Denver" />
      </div>
      <Alerts />
      <Footer />
    </div>
  );
}

export default App;
