import Header from "components/Header";
import FavoritesProvider from "context/Favorites";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const BasePage = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
      <Footer />
    </main>
  );
};

export default BasePage;
