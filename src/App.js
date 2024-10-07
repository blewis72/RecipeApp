import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the matched child route */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/favorites" element={<div>Favorites</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

