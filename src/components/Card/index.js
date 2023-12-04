import { useFavoriteContext } from "context/Favorites";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavovritar from "./desfavoritar.png";

const Card = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = !isFavorite ? iconeFavoritar : iconeDesfavovritar;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
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
