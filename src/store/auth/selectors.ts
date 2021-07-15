import { createSelector } from 'reselect';

export const getAuth = state => state.auth;

export const getLoginWithPhoneStatus = createSelector(getAuth, auth => auth.loginWithPhoneStatus);
