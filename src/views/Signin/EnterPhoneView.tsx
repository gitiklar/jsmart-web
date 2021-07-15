import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import { isValidNumber } from 'libphonenumber-js';

import PhoneInput from "components/PhoneInput";
import Button from "components/Button";
import useNavigator from "common/hooks/useNavigator";
import { loginWithPhone } from "store/auth/actions";
import { getLoginWithPhoneStatus } from "store/auth/selectors";
import LOGIN_WITH_PHONE_STATUS from '../../consts/loginWithPhoneStatus';

export default () => {
  const loginWithPhoneStatus = useSelector(getLoginWithPhoneStatus);
  const dispatch = useDispatch();
  const navigator = useNavigator();

  const [ phone, setPhone ] = useState('');
  
  useEffect(() => {
    if(loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.WAIT_FOR_VERIFICATION) {
      navigator.navigatePhoneVerificationPage();
    }
  }, [loginWithPhoneStatus]);

  const handleClick = () => {
    //add message if not valid
    isValidNumber(phone, 'IL') && dispatch(loginWithPhone(phone));
  };

  return (
    <Paper>
      <Typography variant="h5" color="primary">
        ?מה מספר הטלפון שלך
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        לא משנה אם את/ה משתמש חדש או משתמש קיים, הכנס/י את מספר הטלפון שלך
        לכניסה מהירה:
      </Typography>
      <PhoneInput phone={phone} setPhone={setPhone} />
      {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.LOGIN_FAILED && (
        <div>
          שגיאה באימות מספר הטלפון
        </div>
      )}
      {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.LOGIN_PENDING && (
        <div>
            ...מאמת התחברות
        </div>
      )}
      <Button onClick={handleClick} text={"המשך"} />
    </Paper>
  );
};