import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={props.data.daily[1]} />
          </div>
          <div className="col">
            <ForecastDay data={props.data.daily[2]} />
          </div>
          <div className="col">
            <ForecastDay data={props.data.daily[3]} />
          </div>
          <div className="col">
            <ForecastDay data={props.data.daily[4]} />
          </div>
          <div className="col">
            <ForecastDay data={props.data.daily[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1a3fca45557083c6198e4bt6d7cf4o1c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
