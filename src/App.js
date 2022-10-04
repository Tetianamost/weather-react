import React from "react";
import Sky from "react-sky";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SearchForm from "./SearchForm";
import Alerts from "./Alerts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Sky
        images={{
          /* FORMAT AS FOLLOWS */
          0: "https://cdn-icons-png.flaticon.com/512/3266/3266390.png",
          1: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
          2: "https://cdn-icons-png.flaticon.com/512/899/899532.png",
          3: "https://cdn-icons-png.flaticon.com/512/1888/1888282.png",
          4: "https://cdn-icons-png.flaticon.com/512/2469/2469994.png",
          5: "https://cdn-icons-png.flaticon.com/512/2864/2864448.png",
          6: "https://cdn-icons-png.flaticon.com/512/2315/2315377.png",
          7: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
          8: "https://cdn-icons-png.flaticon.com/512/3093/3093390.png",
          9: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
          10: "https://cdn-icons-png.flaticon.com/512/2076/2076808.png",
        }}
        how={
          130
        } /* Pass the number of images Sky will render chosing randomly */
        time={30} /* time of animation */
        size={"10px"} /* size of the rendered images */
        background={"#6f42c1"}
      />
      <div className="container main-box background-images">
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://cdn-icons-png.flaticon.com/512/3266/3266390.png",
            1: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
            2: "https://cdn-icons-png.flaticon.com/512/899/899532.png",
            3: "https://cdn-icons-png.flaticon.com/512/1888/1888282.png",
            4: "https://cdn-icons-png.flaticon.com/512/2469/2469994.png",
            5: "https://cdn-icons-png.flaticon.com/512/2864/2864448.png",
            6: "https://cdn-icons-png.flaticon.com/512/2315/2315377.png",
            7: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
            8: "https://cdn-icons-png.flaticon.com/512/3093/3093390.png",
            9: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
            10: "https://cdn-icons-png.flaticon.com/512/2076/2076808.png",
          }}
          how={
            130
          } /* Pass the number of images Sky will render chosing randomly */
          time={30} /* time of animation */
          size={"10px"} /* size of the rendered images */
          background={"#6f42c1"}
        />
        <SearchForm defaultCity="Denver" />
      </div>
      <Alerts />
      <Footer />
    </div>
  );
}

export default App;
