import React from "react";

import myImage from "./pokeball-png-45330.png";

function SearchButton({ clicked }) {
  return (
    <button onClick={clicked} style={{ borderRadius: "100%" }}>
      <img src={myImage} style={{ width: "20px" }} />
    </button>
  );
}

export default SearchButton;
