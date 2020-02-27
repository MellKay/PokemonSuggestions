import React from "react";
import "./App.css";
import SearchField from "./SearchBar/SearchField";
import OptionsList from "./AutoComplete/OptionList";
let pokeData = fetch("http://localhost:3000/pokemon")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.map(x => {
      console.log(x.name);
    });
  });

function App() {
  const [input, setInput] = React.useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <SearchField input={input} handleChange={handleChange} />
      <OptionsList options={pokeData} input={input} />
    </div>
  );
}

export default App;
