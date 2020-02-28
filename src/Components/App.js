import React, { useState } from "react";
import "./App.css";
import SearchField from "./SearchBar/SearchField";
import OptionsList from "./AutoComplete/OptionList";
let header =
  "https://fontmeme.com/permalink/200228/78c019343aff9b02f2900e2278bde900.png";

function App() {
  const [input, setInput] = useState("");
  const [option, setOption] = useState([]);

  function handleClick(event) {
    setInput(event.target.innerText);
    console.log("clicked");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <img src={header} />
      <SearchField input={input} handleChange={handleChange} />
      <OptionsList
        input={input}
        setOption={setOption}
        option={option}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
