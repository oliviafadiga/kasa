//imports
import React from "react";
import "./About.css";
import dropDown from "../../components/Drop/Drop";
import imgApropos from "../../images/Apropos-kasa.png";
import imgAproposM from "../../images/Apropos-kasaMob.png";
import items from "../../items.json";

function About() {
  return (
    <div className="about">
      <section className="about__section">
        <img className="about__img" src={imgApropos} alt="relief de montagne" />
        <img
          className="about__img2"
          src={imgAproposM}
          alt="relief de montagne"
        />
      </section>
      <div className="dropdown">
        {
          //map du json items qui crée un élément dropdown pour chaque item
          items.map((items) => (
            <div className="dropdown__box" key={items.id}>
              <dropDown txt={items.text} title={items.value} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default About;
