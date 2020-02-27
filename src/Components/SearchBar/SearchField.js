import React from "react";
import SearchButton from "./SearchButton";

function SearchField({ input, handleChange }) {
  function handleClick() {}

  return (
    <div>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Who's that Pokémon?"
      ></input>
      <SearchButton handleClick={handleClick} />
    </div>
  );
}

export default SearchField;
