import React from "react";
import { TextField, FormControl } from "@material-ui/core";

export default ({ value, onChange, ...rest }) => {
  return (
    <FormControl>
      <TextField
        color="secondary"
        onChange={onChange}
        value={value}
        {...rest}
      />
    </FormControl>
  );
};
