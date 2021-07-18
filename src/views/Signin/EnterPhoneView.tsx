import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

import useNavigator from "common/hooks/useNavigator";
import { loginWithPhone } from "store/auth/actions";
import { getLoginWithPhoneStatus } from "store/auth/selectors";
import LOGIN_WITH_PHONE_STATUS from '../../consts/loginWithPhoneStatus';
import Spinner from "components/spinner";
import PhoneInput from "components/PhoneInput";
import Button from "components/Button";

export default () => {
  
  const [ phone, setPhone ] = useState('');
  const [ isValid, setIsValid ] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const loginWithPhoneStatus = useSelector(getLoginWithPhoneStatus);
  const navigator = useNavigator();

  useEffect(() => {
    loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.WAIT_FOR_VERIFICATION &&
    (navigator.navigatePhoneVerificationPage());
  }, [loginWithPhoneStatus]);


  const handleClick = () =>  dispatch(loginWithPhone(phone));

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}><PhoneRoundedIcon/></Avatar>
            <Typography component="h1" variant="h5">
            הכנס את מספר הטלפון שלך
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            לא משנה אם את/ה משתמש חדש או משתמש קיים, הכנס/י את מספר הטלפון שלך
                לכניסה מהירה:
            </Typography>
            <PhoneInput phone={phone} setPhone={setPhone} setIsValid = {setIsValid} />
                {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.LOGIN_PENDING && 
                    <div style={{display:'flex'}}>
                        <div>...מאמת התחברות</div>
                        <Spinner/>
                    </div>
                }
                {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.LOGIN_FAILED &&
                    <div>שגיאה באימות מספר הטלפון</div>
                }
                <Button onClick={handleClick} text = "המשך" disabled={!isValid}/>
        </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));