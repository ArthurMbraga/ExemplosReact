import React, { useState } from "react";
import "../App.css";

function Box(props) {
  return <div className="box">{props.number}</div>;
}

export default Box;
