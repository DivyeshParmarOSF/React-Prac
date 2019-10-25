import React from "react";
import Weather from "./Weather";

import "./App.css";

class App extends React.Component {

  render() {
    return (
        <div className="weather"> 
            <Weather />
        </div>
    );
  }
}
export default App;
