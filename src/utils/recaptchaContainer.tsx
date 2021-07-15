import firebase from "firebase";

export const RecaptchaContainer = () => {
    return (
        <div id="recaptcha-container" />
    );
}

export const getRecaptchaVerifier = () => new firebase.auth.RecaptchaVerifier('recaptcha-container', {'size': 'invisible','callback': () => {},});
