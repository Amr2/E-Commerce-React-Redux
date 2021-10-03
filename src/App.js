import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
// import HeroSection from './components/HeroSection/HeroSection';
// import BestProduct from './components/BestProduct/BestProduct';
// import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import AllProductPage from './Pages/AllProductPage/AllProductPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/HomePage/HomePage';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
       <Switch>
         <Route path="/" exact>
           <Home/>
         </Route>
      <Route path="/AllProductPage">
      <AllProductPage/>
         </Route>
         </Switch>
         <Footer/>
    </div>
    </Router>
  );
}

export default App;
