import React from "react";
import { Provider } from "react-redux";

// Import global store
import { store } from "../state/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
