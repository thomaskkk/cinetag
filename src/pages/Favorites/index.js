import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from "./Favorites.module.css";
import videos from "json/db.json";

const Favorites = () => {
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
};

export default Favorites;
