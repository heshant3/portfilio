import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import firestore from "./Component/firebaseConfig";
import ReactGa from "react-ga";

ReactGa.initialize("G-PXNJ9MTLPS");

ReactGa.pageview("/");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App firestore={firestore} />
  </BrowserRouter>
);
