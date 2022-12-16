//Importation de fonctions de React Router Dom pour le routing et des composants
import { Routes, Route } from "react-router-dom";
//Importation des pages
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Logement from "../pages/Logement/Logement";
//Importation du header Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Fonction Layout qui contient le header footer autour des routes du corps de la page (sur le route / à la racine on appelle composant Home)
function Layout() {
  return (
    <div className="Layout">
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
export default Layout;
