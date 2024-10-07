import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import {fetchRecipe, fetchRecipes} from '../utils';
import Recipes from '../components/Recipes';
import {AiFillPushpin} from 'react-icons/ai';
import {BsPatchCheck} from 'react-icons/bs';
import RecipeCard from '../components/RecipeCard';

const RecipeDetails = () => {
const [recipe, setRecipe] = useState(null);
const [recipes, setRecipes] = useState([]);

// for the recommended recipes we use recipeS
const [loading, setLoading] = useState(false);


const {id} = useParams()

const getRecipe = async () => {
  try{
    setLoading(true);
    const data = await fetchRecipe(id)
  
    setRecipe(data)

    const recommend = await fetchRecipes ({query: recipe?.label, limit: 5})
  
    setRecipes(recommend)
  
    setLoading(false)
  }catch (error){ 
    console.log(error)

    setLoading(false)

  }


}

useEffect(() => {
  getRecipe(id)
},[id])

if(loading){
  return(
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <Loading />
      </div>
  )
}



  return (
    <div className='w-full'>
      <Header
      title= {recipe?.label } image={recipe?.image} 
      />
      <div className='w-full px-4 lg:px-20 pt-5'>
        <div className='flex gap-10 items-center justify-center px-4 '>
         <div className='flex flex-col justify-between'>
          <span className='text-white text-center border border-gray-500 py-1.5 px-2 
          rounded-full mb-2'>

            {recipe?.calories.toFixed(2)} 
          </span>

          <p className='text-neutral-100 text-[12px]'>
            CALORIES

          </p>

         </div>

         <div className='flex flex-col justify-center'>
          <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
            {recipe?.yield}
            </span>
                  <p className='text-neutral-100 text-[12px] md:text-md'>
                    SERVINGS
                  </p>
         </div>

         <div className='flex flex-col justify-center'>
          <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
          {recipe?.totalNutrients?.['FAT']?.quantity?.toFixed(2) || 0}
            </span>
                  <p className='text-neutral-100 text-[12px] md:text-md'>
                 Total Fat
                  </p>
         </div>

         <div className='flex flex-col justify-center'>
          <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
          {recipe?.totalNutrients?.['SVITB12']?.quantity?.toFixed(2) || 0}
            </span>
                  <p className='text-neutral-100 text-[12px] md:text-md'>
                 Vitamin B12
                  </p>
         </div>
       

         <div className='flex flex-col justify-center'>
          <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>
          {recipe?.totalNutrients?.['CHOLE']?.quantity?.toFixed(2) || 0}
                 mg
            </span>
                  <p className='text-neutral-100 text-[12px] md:text-md'>
                  Cholesterol
                  </p>
         </div>
         </div>
         </div>

         {/* Left side  */}
       <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10 '> 
         <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
          <div className='flex flex-col gap-5'>
<p className='text-green-500 text-2xl underline'>Ingrediants</p>
<p>
  {recipe?.ingredientLines?.map((ingredient, index) =>{
    return(
      <p key={index} className='text-neutral-100 text-[12px] md:text-md flex gap-2'>
        <AiFillPushpin className='text-green-500'/>
        {ingredient}
      </p>
    )
  })}
</p>
          </div>
          <div className='flex flex-col gap-3 mt-20 '>
<p className='text-green-500 text-2xl underline'>Health Labels</p>
<div className='flex flex-wrap gap-4'>
{
  recipe?.healthLabels.map((item, index)=>(
    <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full' key={index}> 
    <BsPatchCheck color='green'/>
    {item}

    </p>
  ))
}
</div>

          </div>

         </div>
         
         </div>
       

{/* Right Side */}

<div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
  {
    recipes?.length > 0 && (
      <>
      <p className='text-white text-2xl'> 
        Also try this
      </p>

      <div className='flex flex-wrap gap-6 px-1 pt-3'> 

      {
        recipes?.map((item,index)=>(
          <RecipeCard recipe={item} key={index}/>
        ))
      }

      </div>
      </>
    )
  }

</div>
      
    </div>
    
  )
}

export default RecipeDetails 