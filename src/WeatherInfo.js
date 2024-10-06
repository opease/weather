import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mb-2">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate time={props.data.daily[0].time} />
        </li>
        <li className="text-capitalize">
          {props.data.daily[0].condition.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.data.daily[0].condition.icon_url}
            alt="mostly Cloudy"
          />
          <span className="temperature">
            {Math.round(props.data.daily[0].temperature.maximum)}
          </span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.daily[0].temperature.humidity}%</li>
            <li>Wind: {props.data.daily[0].wind.speed} km/h</li>
            {}
          </ul>
        </div>
      </div>
    </div>
  );
}
