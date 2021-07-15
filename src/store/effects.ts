import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { loginWithPhone , verifyPhone} from './auth/effects';

export default (action$, store$, dependencies) =>
  combineEpics(
    loginWithPhone,
    verifyPhone,
  )(action$, store$, dependencies).pipe(
    // catchError(error => {
    //   return of({
    //     type: 'GLOBAL ERROR',
    //   });
    // })
  );