import React from "react";

function PokemonImage({ option }) {
  return <img src={option.img_url} />;
}

export default PokemonImage;
