import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";
import Container from "components/Container";

const Player = () => {
  const [video, setVideo] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/thomaskkk/cinetag-api/videos?id=${param.id}`
    )
      .then((reply) => reply.json())
      .then((data) => {
        setVideo(...data);
      });
  }, [param.id]);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Container>
        <Title>
          <h1>Player</h1>
        </Title>
        <iframe
          className={styles.iframe}
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
    </>
  );
};

export default Player;
