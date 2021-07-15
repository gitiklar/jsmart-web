import produce from 'immer';

import * as types from './actionTypes';
import LOGIN_WITH_PHONE_STATUS from '../../consts/loginWithPhoneStatus';

const initState = {
    user: undefined,
    loginWithPhoneStatus: LOGIN_WITH_PHONE_STATUS.INIT,
    loginPhone: undefined,
};

export default produce((state , action) => {
  switch (action.type) {
    case types.AUTH_LOGIN_WITH_PHONE_WAITING_FOR_VERIFICATION:
        state.loginWithPhoneStatus = LOGIN_WITH_PHONE_STATUS.WAIT_FOR_VERIFICATION;
        break;
    case types.AUTH_LOGIN_WITH_PHONE:
        state.loginWithPhoneStatus = LOGIN_WITH_PHONE_STATUS.LOGIN_PENDING;
        state.loginPhone = action.phone;
        break;
    case types.AUTH_LOGIN_WITH_PHONE_FAILED:
        state.loginWithPhoneStatus = LOGIN_WITH_PHONE_STATUS.LOGIN_FAILED;
        break;
  }
} , initState);