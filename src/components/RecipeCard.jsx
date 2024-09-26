import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    
    
    // Destructure safely with default values
    const {
        image = 'https://via.placeholder.com/150', // Fallback image URL
        label = 'Unknown Recipe',
        cuisineType = 'Unknown Cuisine',
        dietLabel = 'No Diet Info',
        mealType = 'Unknown Meal Type',
        uri = ''
    } = recipe?.recipe || {}; // Use empty object if recipe or recipe.recipe is undefined

    // Extract ID safely
    const id = uri.split("#")[1] || 'default-id'; // Fallback ID

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg-gradient shadow w-full rounded-lg'>
                <img
                    src={image}
                    alt={label}
                    className='rounded-lg h-[200px] md:h-[150px] w-full'
                />
                <div className='p-3'>
                    <p className='text-white font-semibold'>{label}</p>

                    <div className='mt-2'>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'  >
                        {cuisineType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full  text-green-500'  >
                        {mealType}
                        </span>

                    </div>
                </div>
              
            </div>
        </Link>
    );
}

export default RecipeCard;
