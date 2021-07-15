import React from "react";
import { Container } from "@material-ui/core";

export default ({ children }) => {
  return <Container maxWidth="xs">{children}</Container>;
};
