import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";

import HeightInput from "components/HeightInput";
import Button from "components/Button";
import useNavigator from "common/hooks/useNavigator";

export default () => {
  const navigator = useNavigator();
  const [ height, setHeight ] = useState('');
  
  const handleClick = () => {
    navigator.navigateAgePage();
  };

  return (
    <Paper>
      <Typography variant="h5" color="primary">
      ?דבר נוסף.. מה הגובה שלך
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
      יש להכניס גובה בסנמטימטרים
      </Typography>
      <HeightInput height={height} setHeight={setHeight} />
      <Button onClick={handleClick} text={"המשך"} />
    </Paper>
  );
};