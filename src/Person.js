import React from "react";
import "./styles.css";
function Person(props) {
  return <div className="person">{`${props.firstName}`}</div>;
}

export default Person;