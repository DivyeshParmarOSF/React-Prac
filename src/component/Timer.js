import React from "react";


export default class Timer extends React.Component {
       
    render() {
        let lblStyle = {}
        if(this.props.hour === "00" && this.props.second === "00" && this.props.minute === "00"){
            lblStyle.color = "black"
        } else if(this.props.hour < 10){
            lblStyle.color = "red"
        }
        return (
        <div className="timer-fields">
            <ul>
                <li id="hour">{this.props.hourlbl}<label id="hourValue" style={lblStyle} >{this.props.hour}</label></li>
                <li id="minute">{this.props.minutelbl}<label id="minuteValue" style={lblStyle} >{this.props.minute}</label></li>
                <li id="second">{this.props.secondlbl}<label id="secondValue"style={lblStyle} >{this.props.second}</label></li>
                <li id="ms">ms<label id="ms">00</label></li>
            </ul>
        </div>
        );
    }
}

