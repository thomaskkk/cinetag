import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Container from "components/Container";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/thomaskkk/cinetag-api/videos")
      .then((reply) => reply.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Container>
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <section className={styles.container}>
          {videos.map((video) => (
            <Card {...video} key={video.id} />
          ))}
        </section>
      </Container>
    </>
  );
};

export default Home;
