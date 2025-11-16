import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import firestore from "./Component/firebaseConfig";
import ReactGa from "react-ga";

ReactGa.initialize("G-PXNJ9MTLPS");

ReactGa.pageview("/");

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App firestore={firestore} />
  </BrowserRouter>
);
