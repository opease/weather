import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-Day">{day()}</div>
      <div className="Forecast-Icon mb-2">
        <img src={props.data.condition.icon_url} alt="icon" />
      </div>
      <div className="Forecast-Temperature">
        <span className="Max-Temp">{maxTemperature()}</span>
        <span className="Min-Temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
