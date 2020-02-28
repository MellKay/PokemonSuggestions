import React, { useState, useEffect } from "react";
import Option from "./Option";

function OptionsList({ option, setOption, input, handleClick }) {
  useEffect(() => {
    fetch(`http://localhost:3000/pokemon?name=${input}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setOption(data);
      })
      .catch(error => console.log(error));
  }, [input]);

  console.log(option);
  return (
    <ul>
      {Array.isArray(option) ? (
        option.map(item => <Option option={item} handleClick={handleClick} />)
      ) : (
        <Option option={option} handleClick={handleClick} />
      )}
    </ul>
  );
}

export default OptionsList;
