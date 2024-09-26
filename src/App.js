import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import Footer from './components/Footer';

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
          <Route path='recipes/:id' element={<RecipeDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

