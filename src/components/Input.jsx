import React from "react";

function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
