
import firebase from "firebase";
import { Observable } from 'rxjs';

import { getRecaptchaVerifier } from "utils/recaptchaContainer";

class AuthPhone {
  confirmationResult = null;

  constructor() {

  }

  linkPhone(phone) {
    return new Observable(subscriber => {
        const appVerifier = getRecaptchaVerifier();
        firebase.auth().signInWithPhoneNumber(`+972 ${phone}`, appVerifier)
        .then((confirmationResult) => {
            this.confirmationResult = confirmationResult;
            console.log(this.confirmationResult);
            
            subscriber.next('OK');
        }).catch((error) => {
            subscriber.error(error);
        });
    });
  }

  resendCode(phone) {
    return this.linkPhone(phone);
  }

  async verifyCode(code) {
      try {
        const { user } = await this.confirmationResult.confirm(code);
        return { user }; 
      } catch (err) {
        console.log(err);
      }
  }

  reload() {
    
  }
}

export default new AuthPhone();
