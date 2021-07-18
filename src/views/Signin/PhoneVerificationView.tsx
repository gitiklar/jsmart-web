import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import useNavigator from "common/hooks/useNavigator";
import { verifyPhone } from "store/auth/actions";
import { getLoginWithPhoneStatus } from "store/auth/selectors";
import LOGIN_WITH_PHONE_STATUS from '../../consts/loginWithPhoneStatus';
import Spinner from "components/spinner";
import Button from "components/Button";
import PasswordInput from "components/PasswordInput";

export default () => {
  
  const [ code , setCode ] = useState('');
  const [ isValid, setIsValid ] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const loginWithPhoneStatus = useSelector(getLoginWithPhoneStatus);
  const navigator = useNavigator();

  useEffect(() => {
    loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.LOGIN_SUCCESSFULLY &&
    (navigator.navigateHeightPage());
  }, [loginWithPhoneStatus]);

  const handleClick = () =>  dispatch(verifyPhone(code));

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}><LockOpenIcon/></Avatar>
            <Typography component="h1" variant="h5">
            אימות מספר הטלפון
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            כדי לאמת את מספר הטלפון שלך, יש להזין את 6 הספרות שקיבלת בהודעת סמס ברגע זה
            </Typography>
            <PasswordInput password={code} setPassword={setCode} setIsValid = {setIsValid} />
                {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.VERIFICATION_PENDING && 
                    <div style={{display:'flex'}}>
                        <div>...בודק</div>
                        <Spinner/>
                    </div>
                }
                {loginWithPhoneStatus === LOGIN_WITH_PHONE_STATUS.VERIFICATION_FAILED &&
                    <div>קוד אימות שגוי</div>
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