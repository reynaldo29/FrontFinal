import { useState, useEffect } from "react";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { CardProducts } from "./components";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";
import { get } from "./services";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const products = await get();
    setProducts(products.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const themeColor = {
    body: {
      backgroundColor: "#1A1A1A",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={themeColor} />
      <Navbar />
      <CardProducts products={products} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
