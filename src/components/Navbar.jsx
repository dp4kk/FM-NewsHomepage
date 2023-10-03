import React from 'react'
import logo from '../assets/images/logo.svg'
const Navbar = ({setShowMenu}) => {
  return (
    <div className="flex  justify-between items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden gap-10 md:flex">
        <p className="text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">
          Home
        </p>
        <p className="text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">
          New
        </p>
        <p className="text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">
          Popular
        </p>
        <p className="text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">
          Trending
        </p>
        <p className="text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">
          Categories
        </p>
      </div>
      <button className='block md:hidden' onClick={()=>setShowMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    </div>
  );
}

export default Navbar