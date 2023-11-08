import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./app/store.js";
import App from "./App.js";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-7ek55zm1m1wbtqqh.us.auth0.com"
      clientId="U5vYDBO3f4Xq611LSnSNFYYt2lKvfILX"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
