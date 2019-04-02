import React from "react";
import "../../App.css";

export default function SearchList(props) {
  return (
    <div
      onClick={() => {
        props.addToFavsFn(props.id);
      }}
      className="search-results"
    >
      <h2>{props.artist}</h2>
      <h3>{props.genre}</h3>
      <img src={props.artwork} alt="" />
    </div>
  );
}
