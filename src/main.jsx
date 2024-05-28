import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import {Rodape} from "./components/Rodape"
import App from "./App"
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Rodape />
  </React.StrictMode>
);
