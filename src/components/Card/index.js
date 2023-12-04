import { useFavoriteContext } from "context/Favorites";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavovritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = !isFavorite ? iconeFavoritar : iconeDesfavovritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          addFavorite({ id, titulo, capa });
        }}
      />
    </div>
  );
};

export default Card;
