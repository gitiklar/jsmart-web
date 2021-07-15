import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import TextInput from "./TextInput";

export default ({ phone, setPhone }) => {
  
  const handlePhoneChange = event => {
    const value = event.target.value;
    setPhone(value);
  }

  return (
    <TextInput
      autoFocus
      id="phone"
      type="tel"
      color="secondary"
      value={phone}
      onChange={handlePhoneChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <div>+972 - </div>
          </InputAdornment>
        ),
      }}
    />
  );
};
