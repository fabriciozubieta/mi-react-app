import React from "react";

function TodoItems (props) {
  return (
    <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
    </li>
  );
}

export {TodoItems};
