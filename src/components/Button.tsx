import React from "react";
import { Button, makeStyles } from "@material-ui/core";

export default ({ onClick, text , ...rest}) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} color="primary" variant="contained" {...rest} className={classes.submit} fullWidth >
      {text}
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));