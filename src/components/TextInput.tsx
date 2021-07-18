import React from "react";
import { TextField } from "@material-ui/core";

export default ({ value, onChange, ...rest }) => {
  return (
      <TextField
        color="secondary"
        onChange={onChange}
        value={value}
        {...rest}
      />
  );
};
