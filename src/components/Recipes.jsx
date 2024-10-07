import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../utils';
import SearchBar from './SearchBar';
import { BiSearchAlt2 } from 'react-icons/bi';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(10);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('search');
        if (searchQuery) {
            setQuery(searchQuery);
            fetchRecipesByQuery(searchQuery, limit);
        } else {
            fetchRecipesByQuery('popular', limit); // Default query
        }
    }, [location.search]); // Run when the search changes

    const fetchRecipesByQuery = async (query, limit) => {
        setLoading(true);
        try {
            const data = await fetchRecipes({ query, limit });
            setRecipes(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setLimit(10); // Reset limit on new search
        window.location.href = `/recipes?search=${encodeURIComponent(query)}`;
    };

    const showMore = () => {
        setLimit((prev) => {
            const newLimit = prev + 10; // Calculate new limit
            fetchRecipesByQuery(query, newLimit); // Fetch recipes with the new limit
            return newLimit; // Return the new limit for state update
        });
    };

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loading /> {/* Ensure your loading component is styled appropriately */}
            </div>
        );
    }

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearch}>
                    <SearchBar
                        placeholder="Search for recipes..."
                        handleInputChange={handleChange}
                        rightIcon={<BiSearchAlt2 className='text-gray-600' />}
                    />
                </form>
            </div>
            {recipes.length > 0 ? (
                <>
                    <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                        {recipes.map((item, index) => (
                            <RecipeCard recipe={item} key={index} />
                        ))}
                    </div>
                    <div className='w-full flex items-center justify-center py-10'>
                        <button 
                            className='bg-green-800 text-white px-3 py-1 rounded-full text-sm'
                            onClick={showMore}
                        >
                            Show More
                        </button>
                    </div>
                </>
            ) : (
                <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No recipes found</p>
                </div>
            )}
        </div>
    );
};

export default Recipes;
