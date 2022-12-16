import React from "react";
import { useState, useEffect } from "react";
import ArrowLeft from "../../images/ArrowLeft.png";
import ArrowRight from "../../images/ArrowRight.png";

function Slider(product) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [right, setRight] = useState(true);
  const slides = product.data;

  useEffect(() => {
    slides.forEach((image) => {
      new Image().src = image;
    });
  }, [slides]); // tableau de dépendance à observer pour detecter le changement
  //Si une des valeurs du tableau change automatique le cde du UseEffet sera Rerun

  //Fonction pour revenir a l'image précedante
  const goToPrevious = () => {
    //appel de la fonction du useState pour modifier SetRight
    setRight(false);
    const isFirstSlide = currentIndex === 0;
    //On vérifie si on est sur la premiere slide on va à la derniere slide sinon on recule de -1
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //appel de la fonction du useState pour modifier currentIndex
    setCurrentIndex(newIndex);
  };

  //Fonction pour avancer l'image
  const goToNext = () => {
    setRight(true);
    const isLastSlide = currentIndex === slides.length - 1;
    //On vérifie si on est sur la derniere slide on va à la premiere slide (0) sinon on avance de 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //Const manyImg determien s'il y a plus qu'une image à afficher
  const manyImg = () => {
    if (slides.length - 1 >= 1) {
      return true;
    }
    return false;
  };

  //Si manyImg est true on affiche les flèches et la map de slides
  return manyImg() ? (
    <div className="slider__styles">
      <img
        className="arrow left__arrow"
        src={ArrowLeft}
        alt="flèche vers la gauche"
        onClick={goToPrevious}
      ></img>

      <img
        className="arrow right__arrow"
        src={ArrowRight}
        alt="flèche vers la droite"
        onClick={goToNext}
      ></img>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === currentIndex
                ? `${right ? "right" : "left"}`
                : "slide__styles-hide"
            }
            key={index}
          >
            {index === currentIndex && (
              <img
                src={slide}
                alt="logement"
                className={right ? "slide__styles-right" : "slide__styles-left"}
              ></img>
            )}
          </div>
        );
      })}
      <span className="number__styles">
        {currentIndex + 1}/{slides.length}
      </span>
    </div>
  ) : (
    <img
      src={`${slides[currentIndex]}`}
      className="slide__styles-one"
      alt="logement"
    ></img>
  );
}

export default Slider;
