import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import BestProduct from './components/BestProduct/BestProduct';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import AllProductPage from './Pages/AllProductPage/AllProductPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HeroSection/>
      <BestProduct/>
      <Category/>
      <Footer/> */}
      <AllProductPage/>
    </div>
  );
}

export default App;
