import { RxPeople } from "react-icons/rx";
import { PiClipboardText } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import "./Promise.css";

function Promise() {
  return (
    <section className="promise">
      <div className="promise__container container">
        <p className="promise__eyebrow">Mon engagement</p>

        <h2 className="promise__title">
          Un site pensé pour vos objectifs, pas seulement pour être beau.
        </h2>

        <div className="promise__cards">
          <article className="promise__card">
            <div className="promise__icon">
              <RxPeople />
            </div>

            <div className="promise__content">
              <h3 className="promise__card-title">Comprendre votre métier</h3>
              <p className="promise__card-text">
                J’écoute vos besoins pour créer un site qui vous ressemble
                vraiment et qui parle à vos clients.
              </p>
            </div>
          </article>

          <article className="promise__card">
            <div className="promise__icon">
              <IoIosDesktop />
            </div>

            <div className="promise__content">
              <h3 className="promise__card-title">
                Design moderne et efficace
              </h3>
              <p className="promise__card-text">
                Un design moderne qui inspire confiance et met en valeur vos
                services et votre savoir-faire.
              </p>
            </div>
          </article>

          <article className="promise__card">
            <div className="promise__icon">
              <IoRocketOutline />
            </div>

            <div className="promise__content">
              <h3 className="promise__card-title">Rapide & bien référencé</h3>
              <p className="promise__card-text">
                Des sites rapides et optimisés pour améliorer votre visibilité
                locale.
              </p>
            </div>
          </article>

          <article className="promise__card">
            <div className="promise__icon">
              <PiClipboardText />
            </div>

            <div className="promise__content">
              <h3 className="promise__card-title">
                Des validations régulières
              </h3>
              <p className="promise__card-text">
                Vous découvrez l’avancement du site à plusieurs reprises et
                pouvez demander des ajustements avant sa mise en ligne.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Promise;
