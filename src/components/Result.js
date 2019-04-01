import React from "react";
import "../styles/Result.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudSun, faCloud, faCloudRain, faCloudShowersHeavy, faPooStorm, faSnowflake, faSmog, faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faCloudSun, faCloud, faCloudRain, faCloudShowersHeavy, faPooStorm, faSnowflake, faSmog, faMoon)


const Result = (props) => {
  const { city, sunrise, sunset, temp, pressure, wind, main, humidity, temp_min, temp_max } = props.weather;
  const displayCity = city.toLowerCase();
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <>
      <div className="result">
        <div className="result__image"><FontAwesomeIcon icon={props.changeIcon()} /></div>

        <div className="result__data">
          <span>{temp}&#176;C</span>
          <span>{main}</span>
          <span>{displayCity}</span>
        </div>
      </div>
      <div className="result__details">
        <div className="result__details--containerLeft">
          <span>{temp} &#176;C</span>
          <span>Temperature</span>
        </div>
        <div className="result__details--containerRight">
          <span>{wind} m/sec</span>
          <span>Wind</span>
        </div>

      </div>
      <div className="information__container">
        <span className="information__container--line"></span></div>
      <div className="result__particulars">
        <div className="particulars__container">
          <div className="particulars__wrapp">
            <span>{temp_min}  &#176;C</span>
            <span className="particulars__wrapp--name">Temp min</span>
            <span>{temp_max}  &#176;C</span>
            <span className="particulars__wrapp--name">Temp max</span>
          </div>
          <div className="particulars__wrapp">
            <span>{humidity} %</span>
            <span className="particulars__wrapp--name">Humidity</span>
            <span>{pressure} hPa</span>
            <span className="particulars__wrapp--name">Pressure</span>
          </div>
          <div className="particulars__wrapp">
            <span>{sunriseTime}</span>
            <span className="particulars__wrapp--name">Sunrise</span>
            <span>{sunsetTime}</span>
            <span className="particulars__wrapp--name">Sunset</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;

