import React from "react";
import { useHistory } from "react-router-dom";

const useNavigator = () => {
  const history = useHistory();

  const redirectToPath = path => {
    history.push(path);
  };

  const navigatePhoneVerificationPage = () => redirectToPath("/phoneverification");
  const navigateHeightPage = () => redirectToPath("/height");
  const navigateAgePage = () => redirectToPath("/age");
  const navigateThanksPage = () => redirectToPath("/thanks");

  return {
    navigatePhoneVerificationPage,
    navigateHeightPage,
    navigateAgePage,
    navigateThanksPage,
  };
};

export default useNavigator