import React from "react";
import TimerControl from "./TimerControl";

import "./App.css";

class App extends React.Component {

  render() {
    return (
        <div className="timer">
            <TimerControl startbtn="Start" stopbtn="Stop"/> 
        </div>
    );
  }
}
export default App;
