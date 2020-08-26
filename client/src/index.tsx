import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { hot } from "react-hot-loader/root";
import { theme, ThemeProvider } from "./utils";
import { GlobalProvider } from "./components";

import { GlobalStyles } from "./App.styles";

const Root = hot(() => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GlobalStyles />
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
));

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
