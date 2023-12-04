import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from "./Favorites.module.css";
import { useFavoriteContext } from "context/Favorites";

const Favorites = () => {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
};

export default Favorites;
