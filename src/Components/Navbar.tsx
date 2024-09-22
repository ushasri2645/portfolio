import '../index.css'
import {NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <nav className='flex flex-col md:flex-row justify-evenly p-5 py-8'>
    <div className='flex items-center justify-between w-full md:w-auto'>
    <NavLink  to='/home' className="text-white font-bold sm:my-3" >My Portfolio</NavLink>
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex md:items-center gap-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
    <NavLink  to='/home' className={({isActive})=>`nav-link ${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'}`} >Home</NavLink>
    <NavLink to='/about' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>About Me</NavLink>
    <NavLink to='/education' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>Education</NavLink> 
    <NavLink to='/projects' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>Projects</NavLink>
    <NavLink to= '/experience' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>Experience</NavLink>
    <NavLink to='/certificates' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>Certificates</NavLink>
    <NavLink to='/contact' className={({isActive})=>`${isActive? 'bg-blue-500 p-2 rounded text-black font-bold':'text-white'} nav-link`}>Get In Touch</NavLink>
  </div>
  </nav>
  )
}

export default Navbar
