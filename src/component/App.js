import React from "react";
import QuizMaster from './QuizMaster'
import "./App.css";

class App extends React.Component {

  render() {
    return (
        <div className="timer">
             <QuizMaster /> 
        </div>
    );
  }
}
export default App;
