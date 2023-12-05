import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import NotFound from "pages/NotFound";

const Player = () => {
  const param = useParams();
  const video = videos.find((video) => {
    return video.id === Number(param.id);
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <iframe
        width="100%"
        height="100%"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Player;
