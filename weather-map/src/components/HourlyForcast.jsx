import React from "react";
import "./HourlyForcast.css";
import { Card } from "react-bootstrap";
import moment from "moment";
const HourlyForcast = ({ weatherList, hourlyWeatherData }) => {
  return (
    <div className="hourly-forcast">
      <Card className="hourly-forcast-card">
        <Card.Body>
          <Card.Title>{moment(weatherList.dt * 1000).format("h a")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {hourlyWeatherData.city.name}
          </Card.Subtitle>
          <Card.Text>
            {Math.round(weatherList.main.temp)}°C{" "}
            <img
              src={`http://openweathermap.org/img/wn/${weatherList.weather[0].icon}@2x.png`}
              alt=""
            />
          </Card.Text>
          <div className="description">
            <p>min: {Math.round(weatherList.main.temp_min)}°C </p>

            <p>max: {Math.round(weatherList.main.temp_max)}°C</p>
            <p>humidity: {Math.round(weatherList.main.humidity)}%</p>

            <p>Wind: {Math.round(weatherList.wind.speed)}Km/h</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HourlyForcast;
