import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Hero />
        <Products heading="Chose your favourite" />
        <Feature />
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
