import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, Typography } from "@material-ui/core";

import PasswordInput from "components/PasswordInput";
import Button from "components/Button";
import useNavigator from "common/hooks/useNavigator";
import { verifyPhone } from "store/auth/actions";

export default () => {
  const dispatch = useDispatch();
  const navigator = useNavigator();
  const [ code , setCode ] = useState('');

  const handleClick = () => {
    dispatch(verifyPhone(code));
    navigator.navigateHeightPage();
  };

  return (
    <Paper>
      <Typography variant="h5" color="primary">
        אימות מספר הטלפון
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        כדי לאמת את מספר הטלפון שלך, יש להזין את 6 הספרות שקיבלת בהודעת סמס ברגע זה
      </Typography>
      <PasswordInput password={code} setPassword={setCode} />
      <Button onClick={handleClick} text={"המשך"} />
    </Paper>
  );
};
