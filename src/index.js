//Importation
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./Home";
//Importation de browserRouter pour React Router Dom
import { BrowserRouter } from "react-router-dom";

// Au chargement de la page on crée un élément ReactDOM appelé Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Lancement de React avec compasant App
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
