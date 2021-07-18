import React from "react";
import TextInput from "./TextInput";

export default ({ password, setPassword , setIsValid}) => {

  const handlePasswordChange = e => {
    const newVal = e.target.value;
    setPassword(newVal);
    setIsValid(newVal.length === 6);
  };

  return (
    <TextInput
      value={password}
      onChange={handlePasswordChange}
      autoFocus
      id="standard-password-input"
      type="password"
      color="secondary"
      inputProps={{ maxLength: 6 }}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
};
