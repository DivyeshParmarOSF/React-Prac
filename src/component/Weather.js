import React from "react";
import WeatherDataList from './WeatherDataList'

let records;
export default class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherData : [],
            dataSYS : []
        }
    }
    
    getWeatherData = () => {
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0df633c67c9e337f3ebd1482f6c7fba5')
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                weatherData : data,
                dataSYS : Object.keys(this.state.weatherData).map((key) => {return { key }})
            })
        )
        .catch((error) => {
            // handle your errors here
            console.error(error)
          })
    }
    componentDidMount = () => {
        this.getWeatherData()
        // this.setState ({
        //     dataSYS : Object.keys(this.state.weatherData).length
        // })
    }
    render() {
        const { base } = this.state;

        records = this.state.weatherData;
        const recordItem = Object.keys(records).map((key) => <WeatherDataList key={key}  details={records[key]} />);
        return(
            <div>
                {records.id} -----{this.state.dataSYS.country}
                - * - *{ this.state.dataSYS } 

                {/* {Object.keys(this.state.weatherData).map((key) => { return { key }})} */}
            </div>
        );
    }
}

