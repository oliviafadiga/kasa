//Importation
import "./Home.css";
import products from "../../products.json";
import homeImg from "../../images/Home-entete.png";
import { Link } from "react-router-dom";

//Fonction Home crée la page Home map du json products pour créer un lien par produit
function Home() {
  //Ajout d'un état pour les images afin que react enregistre l'image affiché

  return (
    <div className="home">
      <section className="home__section">
        <p>Chez vous, partout et ailleurs</p>
        <div className="home__img">
          <img src={homeImg} alt="décor naturel"></img>
        </div>
      </section>
      <div className="gallery">
        {products.map((product) => (
          <Link
            to={`/Logement/${product.id}`}
            className="product__item"
            key={product.id}
          >
            <img
              src={product.pictures[0]}
              alt="logement"
              className="product__img"
            />
            <div className="product__title">
              <span>{product.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
//Exportation
export default Home;
