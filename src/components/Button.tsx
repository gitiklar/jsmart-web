import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default ({ onClick, text }) => {
  return (
    <Button onClick={onClick} color="primary" variant="contained">
      {text}
    </Button>
  );
};
