import { useContext, useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "./components/Skills/Skills";


const App = () => {
  


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor:darkMode ? "#000" : "white",
        color: darkMode && "white",
      }}
    >
      <ToastContainer />
      <Toggle />
      <Intro />
      <About />
      <Skills/>
      <ProductList />

      <Contact />
    </div>
  );
};

export default App;
