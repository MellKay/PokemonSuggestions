import React from "react";
import SearchButton from "./SearchButton";

function SearchField({ input, handleChange }) {
  function clicked() {}

  return (
    <div>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Who's that Pokémon?"
      ></input>
      <SearchButton clicked={clicked} />
    </div>
  );
}

export default SearchField;
