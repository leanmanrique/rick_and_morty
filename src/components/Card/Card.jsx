import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <button className={style.closeButton} onClick={() => onClose(id)}>
          X
        </button>

        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>

        <img className={style.characterImage} src={image} alt={name} />
      </div>

      <div className={style.atributes}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{status}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}

export default Card;
