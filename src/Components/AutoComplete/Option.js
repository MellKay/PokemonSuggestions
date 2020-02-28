import React from "react";
import "./Option.css";

function Option({ option, handleClick }) {
  return (
    <li onClick={handleClick}>
      <h2>{option.name}</h2>
      <img src={option.img_url} />
      <p>{option.description}</p>
    </li>
  );
}

export default Option;
