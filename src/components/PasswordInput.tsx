import React from "react";
import TextInput from "./TextInput";

export default ({ password, setPassword }) => {

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <TextInput
      autoFocus
      id="standard-password-input"
      type="password"
      color="secondary"
      inputProps={{ maxLength: 6 }}
      value={password}
      onChange={handlePasswordChange}
    />
  );
};
