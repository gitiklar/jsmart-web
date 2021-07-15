import React from "react";
import TextInput from "./TextInput";

export default ({ height, setHeight }) => {

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };
  
  return (
    <TextInput
      autoFocus
      id="standard-number"
      type="Number"
      color="secondary"
      value={height}
      onChange={handleHeightChange}
      onInput = {e => {
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
      }}
    />
  );
};
