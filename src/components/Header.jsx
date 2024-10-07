import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import SearchBar from './SearchBar';

const images = [banner1, banner2, banner3];

const Header = ({ title, image, type }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (query) {
      
      navigate(`/recipes?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img 
          src={image ?? images[Math.floor(Math.random() * images.length)]} 
          alt='Recipes' 
          className='w-full h-full object-cover' 
        />
      </div>

      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4'>
        <h1 className='text-4xl 2xl:text-6xl text-white font-bold text-center'>{title}</h1>
        {type && (
          <p className='text-sm mt-4 text-center text-green-500 px-6 py-4'>
            <form className='w-full lg:w-2/4' onSubmit={handleSearch}>
              <SearchBar 
                placeholder="eg. Cake"
                handleInputChange={handleChange}
                rightIcon={<BiSearchAlt2 className='text-gray-600' />}
              />
            </form>
            <br className='hidden md:block'/>
            Discover different recipes and their nutritional values
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
