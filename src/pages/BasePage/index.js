import Header from "components/Header";
import FavoritesProvider from "context/Favorites";
import Container from "components/Container";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const BasePage = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
};

export default BasePage;
