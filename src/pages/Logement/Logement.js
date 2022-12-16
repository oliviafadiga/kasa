import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../products.json";
import DropDown from "../../components/Drop/Drop";
import Rating from "../../components/Rating/Rating";
import Slider from "../../components/Carousel/Carousel";
import "./Logement.css";

function Logement() {
  //pour récupérer l'id dans l'url pour filtrer le contenue
  const params = useParams();
  //Const UseNavigate permettra de renvoyer sur la page error si l'id est incorrect
  const navigate = useNavigate();
  useEffect(() => {
    let product = products.find((product) => params.id === product.id);
    if (!product) {
      navigate("/error");
    }
  });

  return (
    <div id="house">
      <div className="house">
        {products
          .filter((product) => product.id === params.id)
          .map((product, index) => (
            <div key={product.id - index} className="house__boxes">
              <div className="house__carousel">
                <Slider data={product.pictures} />
              </div>
              <div className="house__box">
                <div className="house__left">
                  <h2>{product.title}</h2>
                  <p className="house__location">{product.location}</p>
                  <div className="tags">
                    {product.tags.map((tag, key) => (
                      <div className="tag" key={key}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="house__right">
                  <div className="house__name">
                    <p>{product.host.name}</p>
                    <img
                      className="house__host"
                      src={product.host.picture}
                      alt="Propriétaire du logement"
                    />
                  </div>
                  <div className="rating">
                    <Rating rate={product.rating} />
                  </div>
                </div>
              </div>
              <div className="drop">
                <div className="drop__down">
                  <DropDown title={"Description"} txt={product.description} />
                </div>
                <div className="drop__down">
                  <DropDown
                    title={"Équipements"}
                    txtArray={product.equipments}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Logement;
