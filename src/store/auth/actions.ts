import * as types from './actionTypes';

export function loginWithPhone(phone) {
    return { type: types.AUTH_LOGIN_WITH_PHONE, phone };
}

export function verifyPhone(verificationCode) {
    return { type: types.AUTH_LOGIN_WITH_PHONE_VERIFICATION, verificationCode };
  }