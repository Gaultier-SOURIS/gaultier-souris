import imgHero from "../../assets/imageHero.webp";
import { CiLocationOn } from "react-icons/ci";
import { SlSpeedometer } from "react-icons/sl";

import { CiMobile3 } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__container container">
        <div className="hero__grid">
          <p className="hero__pill">
            <CiLocationOn /> Disponible en Gironde et à distance
          </p>
          <h1 className="hero__title">
            Des sites vitrines <br /> qui vous rendent <br />
            <span>visible et crédible.</span>
          </h1>
          <p className="hero__description">
            Je crée des sites web modernes, rapides et optimisés pour vous aider
            à attirer plus de clients et a developper votre activité localement.
          </p>
          <div className="hero__actions">
            <button className="hero__button hero__button--primary">
              Contactez-moi
            </button>

            <button className="hero__button hero__button--secondary">
              Voir mes réalisations
            </button>
          </div>

          <div className="hero__features">
            <article className="hero__feature">
              <div className="hero__feature-icon">
                <SlSpeedometer />
              </div>
              <p className="hero__feature-text">Sites rapides et performants</p>
            </article>
            <article className="hero__feature">
              <div className="hero__feature-icon">
                <CiMobile3 />
              </div>
              <p className="hero__feature-text">
                Compatible mobiles et tablettes
              </p>
            </article>
            <article className="hero__feature">
              <div className="hero__feature-icon">
                <HiMiniMagnifyingGlass />
              </div>
              <p className="hero__feature-text">Optimisé pour Google</p>
            </article>
          </div>
          <div className="hero__img">
            <img src={imgHero} alt="image d'un bureau avec deux ordinateurs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
