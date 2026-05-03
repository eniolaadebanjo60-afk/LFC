import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newletter";
import About from "./pages/About";
import Testimonies from "./pages/Testimonies";
import Blog from "./pages/Blog";
import Give from "./pages/Give";
import GiveSection from "./components/GiveSection";
import './App.css'
import BlogAdmin from './pages/BlogAdmin';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<BlogAdmin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App