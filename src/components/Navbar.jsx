import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import Button from './Buttons'

//need to make a logo
//need to change names of nav links

const Navbar = () => {
    // const [open, setOpen] = useState(false)
  return (
 <header className='w-full fixed z-10 bg-black opacity-90'>
    <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
        <ul className='hidden md:flex text-white gap-6'>
<li>
    <a href="/">Home</a>    
</li>
<li>
    <a href="Recipes">Explore</a>    
</li>
<li>
    <a href="Favorites">Favorites</a>    
</li>
        </ul>

        <Button />
      
    </nav>
 </header>
  )
}

export default Navbar
