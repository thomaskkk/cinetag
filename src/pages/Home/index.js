import Header from "pages/Header";
import Banner from "pages/Banner";
import Footer from "pages/Footer";
import Title from "pages/Title";

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Footer />
    </>
  );
};

export default Home;
