import { BrowserRouter } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle  />
        <Hero />
        <Products heading='Choose your favorite' data={productData}  />
        <Feature />
        <Products heading='Sweet Treats for You' data={productDataTwo} />
        <Footer  />
    </BrowserRouter>
  );
}

export default App;
