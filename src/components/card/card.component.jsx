import React from "react";
import "./card.styles.css";

export const Card = props => {
  console.log("CARD => ", props);
  return (
    <div className="card">
      <div key={props.monster.id}>{props.monster.name}</div>
    </div>
  );
};
