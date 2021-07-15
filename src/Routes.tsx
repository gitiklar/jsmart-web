import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import RouteWithLayout from "./common/components/RouteWithLayout";
import HomePage from "./pages/home";
import PhonePage from "./pages/signIn/Phone";
import PhoneVerificationPage from "./pages/signIn/PhoneVerification";
import HeightPage from "./pages/signIn/Height";
import AgePage from "./pages/signIn/Age";
import ThanksPage from "./pages/signIn/Thanks";
import MainLayout from "./layouts/MainLayout";
import SignInLayout from "./layouts/SignInLayout";

export default () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/phone" />
        <RouteWithLayout
          component={HomePage}
          exact
          layout={MainLayout}
          path="/home"
        />
        <RouteWithLayout
          component={PhonePage}
          exact
          layout={SignInLayout}
          path="/phone"
        />
        <RouteWithLayout
          component={PhoneVerificationPage}
          exact
          layout={SignInLayout}
          path="/phoneverification"
        />
        <RouteWithLayout
          component={HeightPage}
          exact
          layout={SignInLayout}
          path="/height"
        />
        <RouteWithLayout
          component={AgePage}
          exact
          layout={SignInLayout}
          path="/age"
        />
        <RouteWithLayout
          component={ThanksPage}
          exact
          layout={SignInLayout}
          path="/thanks"
        />
      </Switch>
    </Router>
  );
};
