import React from "react";
import { InputAdornment } from "@material-ui/core";
import { isValidNumber } from 'libphonenumber-js';

import TextInput from "./TextInput";

export default ({ phone, setPhone , setIsValid }) => {
  
  const handlePhoneChange = e => {
    const newVal = e.target.value;
    setPhone(newVal);
    setIsValid(isValidNumber(newVal, 'IL'));
  }

  return (
    <TextInput
            value={phone}
            onChange={handlePhoneChange}
            variant="outlined"
            margin="normal"
            id="phone"
            autoComplete="phone"
            type="tel"
            color="secondary"
            autoFocus
            fullWidth
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
