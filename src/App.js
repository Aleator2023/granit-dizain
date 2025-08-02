// src/App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from '../src/components/Header.js'
import Main from '../src/components/Main.js';
import About from '../src/components/About.js';
import Products from '../src/components/Products.js';
import Reviews from '../src/components/Reviews.js';
import Footer from "./components/Footer.js";
import VideoGallery from "./components/VideoGallery.js";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <About />
      <Products />
      <VideoGallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;