//imports
import React from "react";
import star from "../../images/star_rate.png";
import starEmpty from "../../images/star_rate-empty.png";

//Fonction reçois rate du json
function Rating(rate) {
  //déclaration du tableau range 1 à 5
  const range = [1, 2, 3, 4, 5];
  //Map du range pour chaque range element rate on affiche une image d'étoile pleine
  return range.map((rangeElem, key) =>
    rangeElem <= rate.rate ? (
      <img src={star} alt="étoile pleine" key={key} />
    ) : (
      //jusqu'a == au rate puis on affiche étoile vide
      <img
        src={starEmpty}
        alt="étoile vide"
        key={key}
        className="empty__star"
      />
    )
  );
}
export default Rating;
