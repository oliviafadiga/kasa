//import Images et Usestate pourenregistré l'état
import React, { useState } from "react";
import ArrowUp from "../../images/ArrowUp.png";
import ArrowDown from "../../images/ArrowDown.png";

function DropDown({ txt, title, txtArray }) {
  //Récupère la déstructuration: Le tableau contient l'état et la fonction qui permet de modifier l'état
  const [isOpen, setIsOpen] = useState(false);
  // suivant l’état du bouton on execute un affichage conditionel à l'aide de l'opérateur ternaire
  //Si isOpen est vrai true tu m'affiches
  return isOpen ? (
    <div>
      <button
        className="dropdown__button"
        type="button"
        onClick={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <img src={ArrowUp} alt="flèche vers le haut" />
      </button>

      {
        //Si on a un tableau de txt crée une map du tableau pour parcourir chaque équipement et les mettres dans un p
        txtArray ? (
          <div className="dropdown__p__array">
            {txtArray.map((txte, index) => (
              <p className="dropdown__p-array" key={index}>
                {txte}
              </p>
            ))}
          </div>
        ) : (
          <p className="dropdown__p">{txt}</p>
        )
      }
    </div>
  ) : (
    //Si isOpen False
    <button
      className="dropdown__button"
      type="button"
      onClick={() => setIsOpen(true)}
    >
      <span>{title}</span>
      <img src={ArrowDown} alt="flèche vers le bas" />
    </button>
  );
}
export default DropDown;
