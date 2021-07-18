
import firebase from "firebase";
import { Observable } from 'rxjs';

import { getRecaptchaVerifier } from "utils/recaptchaContainer";

class AuthPhone {
  confirmationResult = null;

  constructor() {

  }

  linkPhone(phone): Observable<string> {
    return new Observable(async subscriber => {
      try {
        this.confirmationResult = await firebase.auth().signInWithPhoneNumber(`+972 ${phone}`, getRecaptchaVerifier());
        subscriber.next('OK');
      } catch (error) {
        subscriber.error(error);
      }
    });
  }

  resendCode(phone) {
    return this.linkPhone(phone);
  }

  async verifyCode(code) {
//     firebase.auth().onAuthStateChanged((user) => {
//      
//     });
//     https://stackoverflow.com/questions/50615308/how-to-check-if-a-user-already-exists-in-firebase-during-phone-auth
      

// 1.) detect new user

      try {
        const { user } = await this.confirmationResult.confirm(code);
        return { user }; 
      } catch (error) {
        return { error }; 
      }
  }

  reload() {
    
  }
}

export default new AuthPhone();
