import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// import components
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import convertNumberToPersian from "./useConvertNumbersToPersian";

// import pages
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Classification from "./pages/Classification";

function App() {
  return (
    <div className="app bg-gray-100 relative">
      <MainHeader />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productslist/:productType" element={<ProductsList />} />
          <Route path="/singleProduct/:productType/:productID" element={<SingleProduct />}/>
          <Route path="/classification" element={<Classification />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
