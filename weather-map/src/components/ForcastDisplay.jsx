import React from "react";
import "./ForcastDisplay.css";
import { Container, Carousel, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import HourlyForcast from "./HourlyForcast";
import { connect } from "react-redux";
import { fillWeatherListAction } from "../actions";

const mapStateToProps = (state) => state;

const ForcastDisplay = (props) => {
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
  console.log("prop", props.weatherList);
  useEffect(() => {
    console.log("prop", props.weatherList.list);
  }, []);
  return (
    <Container className="  forcast-display my-3 px-0">
      <div className="forecast-container mt-1 d-flex row">
        <Carousel interval={null}>
          <Carousel.Item>
            <Row className="mx-0">
              {Object.keys(props.weatherList).length !== 0
                ? props.weatherList.list.slice(0, 6).map((weatherList) => (
                    <Col xs="12" sm="6" md="4" lg="2">
                      <HourlyForcast
                        weatherList={weatherList}
                        hourlyWeatherData={props.weatherList}
                      />
                    </Col>
                  ))
                : ""}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {Object.keys(props.weatherList).length !== 0
                ? props.weatherList.list.slice(6, 12).map((weatherList) => (
                    <Col xs="12" sm="6" md="4" lg="2">
                      <HourlyForcast
                        weatherList={weatherList}
                        hourlyWeatherData={props.weatherList}
                      />
                    </Col>
                  ))
                : ""}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {Object.keys(props.weatherList).length !== 0
                ? props.weatherList.list.slice(12, 18).map((weatherList) => (
                    <Col xs="12" sm="6" md="4" lg="2" className="mx-2">
                      <HourlyForcast
                        weatherList={weatherList}
                        hourlyWeatherData={props.weatherList}
                      />
                    </Col>
                  ))
                : ""}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default connect(mapStateToProps)(ForcastDisplay);
