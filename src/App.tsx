import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AOS from "aos";
import "./App.css";
import Routes from "./Routes";
import MainTheme from "./theme";

import "aos/dist/aos.css";
function App() {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: "ease-in-out",
  });

  return (
    <ThemeProvider theme={MainTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
