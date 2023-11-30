import Header from "pages/Header";
import Banner from "pages/Banner";
import Footer from "pages/Footer";
import Title from "pages/Title";
import Card from "pages/Card";

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card
        id="1"
        titulo="Gato"
        capa="https://thecatapi.com/api/images/get?format-src&type=png"
      />
      <Footer />
    </>
  );
};

export default Home;
