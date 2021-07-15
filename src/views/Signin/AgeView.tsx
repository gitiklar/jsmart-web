import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";

import DatePickerInput from "components/DatePickerInput";
import Button from "components/Button";
import useNavigator from "common/hooks/useNavigator";

export default () => {
  const navigator = useNavigator();
  const [birthday, setBirthday] = useState("");

  const handleClick = () => {
    navigator.navigateThanksPage();
  };

  return (
    <Paper>
      <Typography variant="h5" color="primary">
        ?מתי נולדת
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        גיל מינימלי 18
      </Typography>
      <DatePickerInput date={birthday} setDate={setBirthday} />
      <Button onClick={handleClick} text={"המשך"} />
    </Paper>
  );
};
