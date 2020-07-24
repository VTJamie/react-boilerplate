import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store';
 
import Hello from "./components/HelloComponent";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <Provider store={store}>
    <main>
      <CssBaseline />
      <Hello />
    </main>
  </Provider>,
    document.getElementById("example")
);