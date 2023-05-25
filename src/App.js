import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";

import Projects from "./pages/Projects";

import ElementsP from "./pages/ElementsP";
import ContactP from "./pages/ContactP";
import PricingP from "./pages/PricingP";
import ProjectP from "./pages/ProjectP";

import BlogHomeP from "./pages/BlogHomeP";
import BlogSingleP from "./pages/BlogSingleP";
import Navbar from "./components/NavBar";

// import "bootstrap/dist/css/bootstrap.min.css";

// import Home from './pages/Home';
import OurService from "./components/OurService";
import OurPortfolio from "./components/OurPortfolio";
import PricingPlan from "./components/PricingPlan";
import OurBlog from "./components/OurBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/home" component> */}
            <Route path="/element" element={<ElementsP />} />      
            <Route path="/contact" element={<ContactP />} />
            <Route path="/pricing" element={<PricingP />} />
            <Route path="/project" element={<ProjectP />} />
          {/* </Route> */}
          <Route path="/BlogHomeP" element={<BlogHomeP />} />
          <Route path="/BlogSignleP" element={<BlogSingleP />} />
        </Routes>
        
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
