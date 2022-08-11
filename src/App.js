import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchForm from "./SearchForm";
import Alerts from "./Alerts";
import Footer from "./Footer";
import Date from "./Date";

function App() {
  return (
    <div className="App">
      <div className="container main-box background-images">
        <Date />
        <SearchForm />
      </div>
      <Alerts />
      <Footer />
    </div>
  );
}

export default App;
