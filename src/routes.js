import Header from "pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
