import React from "react";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import "./Search.css";
import { fillWeatherListAction } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  fetchWeatherList: (searchQuery) =>
    dispatch(fillWeatherListAction(searchQuery)),
});
const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  /* const dispatch = useDispatch(); */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchWeatherList(searchQuery);
  };
  return (
    <div className="Container my-4 mx-5">
      <Form className="find-location mx-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find your location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input type="submit" value="Find" />
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
