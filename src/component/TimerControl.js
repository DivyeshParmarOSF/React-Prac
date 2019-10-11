import React from "react";
import Timer from "./Timer";

let value, counter, hours, minutes, seconds, uservalue; 

export default class TimerControl extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            hours: "00",
            minutes : "00",
            seconds : "00",
            value: null,
            inputvalue : '',
            ispause : false,
            displaybtn: true,
            stopsoon : false
        };
    }

    setValue = (event) => {
        this.setState({
            inputvalue : parseInt(event.target.value),
        });
    }        

    timerfunc = () => {
        uservalue = this.state.inputvalue; 
        hours   = Math.floor(uservalue / 3600);
        minutes = Math.floor((uservalue - (hours * 3600)) / 60);
        seconds = uservalue - (hours * 3600) - (minutes * 60); 

        counter = setInterval(() => { this.timer(value) }, 1000); 
    };
     
    timer = (value) => {   
        //console.log("(1)hours->" + hours + " (2) minutes->" + minutes + " (3)seconds->" + seconds);
        if(hours > 0) {
            if(minutes === 0) {
                minutes = 59;
                hours = hours - 1;  
            } else {
                if(minutes > 0) {
                    seconds = seconds - 1;
                    if(seconds < 0) {
                        seconds = 59;
                        minutes = minutes - 1
                    }
                } else {
                    if(seconds === 0) {
                        clearInterval(counter);
                    } else {
                        seconds = seconds - 1;
                    }
                }
            }
        }
        else{
            if(minutes > 0) {
                seconds = seconds - 1;
                if(seconds < 0) {
                    seconds = 59;
                    minutes = minutes - 1
                }
            } else {
                if(seconds === 0) {
                    clearInterval(counter);
                } else {
                    seconds = seconds - 1;
                }
            }
        }
        this.setState({  
            seconds : seconds,
            hours : hours,
            minutes : minutes        
        }) 
        if (seconds < 10) {
            this.setState({
              seconds: "0" + this.state.seconds,
              stopsoon : true
            })
        }
        if (hours < 10) {
            this.setState({
                hours: "0" + this.state.hours,
                stopsoon : true
            })
        }
        if (minutes < 10) {
            this.setState({
                minutes: "0" + this.state.minutes,
                stopsoon : true
            })
        }
       
    }  
    
    startTimer = () => {     

        if(this.state.ispause === true){
            clearInterval(counter);
            this.setState({  
                seconds : this.state.seconds,
                hours : this.state.hours,
                minutes : this.state.minutes,
                displaybtn : false      
            })
            
            counter = setInterval(() => { this.timer(value) }, 1000); 
        } else {
            this.setState({
                displaybtn : false
            })
            this.timerfunc();            
        }
        //console.log("start-> (1)hours->" + hours + " (2) minutes->" + minutes + " (3)seconds->" + seconds);
    }
    stopTimer = () => {
        clearInterval(counter);
        this.setState({
            ispause : true,
            displaybtn : true
        })
        //console.log("Stop->(1)hours->" + hours + " (2) minutes->" + minutes + " (3)seconds->" + seconds);
    }
    resetTimer = () => {
        this.setState({  
            hours: "00",
            minutes : "00",
            seconds : "00",      
        })
        this.setState.value = "";
        clearInterval(counter);
        window.location.reload();
        
    }

    render() {
        return (
        <div className="timercontrol">

            <Timer hourlbl="Hour" minutelbl="Minutes" secondlbl="Seconds" hour={this.state.hours} minute={this.state.minutes} second={this.state.seconds}/>
            <input type="text" id="timerInput" value={this.setState.value} onChange={this.setValue}/>
            { this.state.displaybtn &&
                <button id="btn-start" onClick={this.startTimer}>{this.props.startbtn}</button>
            } 
            {!this.state.displaybtn && 
                <button style={{color:'#f00'}} id="btn-stop" onClick={this.stopTimer}>{this.props.stopbtn}</button>
            }
            <button  onClick={this.resetTimer}>Reset</button>
        </div>
        );
    }
}
