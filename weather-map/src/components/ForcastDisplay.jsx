import React from "react";
import "./ForcastDisplay.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import HourlyForcast from "./HourlyForcast";
import { connect } from "react-redux";
import { fillWeatherListAction } from "../actions";

const mapStateToProps = (state) => state;

const ForcastDisplay = (props) => {
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
  console.log("prop", props.weatherList);
  /* const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=e24eeecb7f9945b49ba016bd3e81f412&units=metric&cnt=17`
      );
      if (response.ok) {
        const fetchedData = await response.json();
        setHourlyWeatherData(fetchedData);
        console.log(fetchedData);
      }
    } catch (error) {
      alert("sth wrong");
    }
  }; */
  useEffect(() => {
    console.log("prop", props.weatherList.list);
  }, []);
  return (
    <Container className="  forcast-display my-5">
      <div className="forecast-container mt-5 d-flex">
        {Object.keys(props.weatherList).length !== 0
          ? props.weatherList.list.map((weatherList) => (
              <HourlyForcast
                weatherList={weatherList}
                hourlyWeatherData={props.weatherList}
              />
            ))
          : ""}
      </div>
    </Container>
  );
};

export default connect(mapStateToProps)(ForcastDisplay);
