import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritesProvider from "context/Favorites";
import Player from "pages/Player";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/:id" element={<Player />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
