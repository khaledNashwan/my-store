import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Nav";
import Home from "./page/Home";
import Product from "./page/Product";
import Cart from "./page/Cart";
import NotFound from "./page/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path = "*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
