import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    
    <main className='w-full flex flex-col'>
     
      <Header
      
      title={
       <h1>Welcome to NutriData</h1>
      }
      
      type = 'home'
     
      
      />
   

 
    </main>
  )
}

export default Home
