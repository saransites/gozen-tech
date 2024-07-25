import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./components/Redux/Store.jsx";
import { Provider } from "react-redux";
import MyErrorBoundary from "./components/ErrorBoundary/Task11.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyErrorBoundary>
    <Provider store={Store}>
      <App />
    </Provider>
  </MyErrorBoundary>
);
