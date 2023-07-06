import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about";
import Header from "./components/header";
import Footer from "./components/footer";
import Portfolio from "./portfolio";
import Home from "./home";
function App() {
  return (
    <>
      <Header/>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>    
    <Footer/>
    </>
  );
}

export default App;
