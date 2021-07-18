import { mergeMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';

import * as types from './actionTypes';
import { BaseRegister } from 'consts/userEvents';
import AuthPhone from '../../services/authPhone';
import QueueService from '../../services/queue';

export const loginWithPhone = action$ =>
  action$.pipe(
    ofType(types.AUTH_LOGIN_WITH_PHONE),
    mergeMap(({ phone }) => {
      return AuthPhone.linkPhone(phone).pipe(
        map(status => {
          if (status === 'OK') {
            return {
              type: types.AUTH_LOGIN_WITH_PHONE_WAITING_FOR_VERIFICATION,
            };
          }
          return {
            type: 'NONE',
          };
        })
      );
    }),
    catchError(error => {
      return of({
        type: types.AUTH_LOGIN_WITH_PHONE_FAILED,
        error: error?.message,
      });
    })
  );

  export const verifyPhone = action$ =>
  action$.pipe(
    ofType(
      types.AUTH_LOGIN_WITH_PHONE_VERIFICATION,
    ),
    mergeMap(async ({verificationCode}) => {
      let authUser;
      try {
        authUser = await AuthPhone.verifyCode(verificationCode);
        if(authUser.error) throw new Error(authUser.error);
        const isNewUser = authUser.user.additionalUserInfo?.isNewUser;
        if (isNewUser) {
          QueueService.sendEvent(authUser.user.user.uid, BaseRegister.Register, {
            method: 'phone',
          });
        }
        return {
          type: types.AUTH_LOGIN_WITH_PHONE_VERIFICATION_SUCCESSFULLY,
        };
      } catch (error) {
        return {
          type: types.AUTH_LOGIN_WITH_PHONE_VERIFICATION_FAILED,
          error: error?.message,
        };
      }
    }),
    catchError(error => {
      return of({
        type: types.AUTH_LOGIN_WITH_PHONE_VERIFICATION_FAILED,
        payload: error?.message,
      });
    })
  );