import Header from "pages/Header";
import Banner from "pages/Banner";
import Footer from "pages/Footer";
import Title from "pages/Title";
import Card from "pages/Card";
import styles from "./Home.module.css";
import videos from "json/db.json";

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Home;
