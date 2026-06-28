import imgHero from "../../assets/imageHero.webp";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container ">
        <div className="hero__grid">
          <div className="hero__content">
            <h1>Developpeur Web en Gironde</h1>
            <h2>Gaultier Souris</h2>
          </div>
          <div className="hero__img">
            <img src={imgHero} alt="image d'un bureau avec deux ordinateurs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
