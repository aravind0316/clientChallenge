import React from 'react'
import { FilterContext } from './App'

const Functions = (props) => {
 
const {toggle,setToggle,plan,setPlan,handleClick} = React.useContext(FilterContext)
const handleChange = async (e) => {
  await setPlan(e.target.value)
  await handleClick();
}
  return (
    <div className="flex flex-col items-center w-full">
    <div class="dropdown relative w-full">
      <button
        class="
          w-full
          dropdown-toggle
          px-6
          py-2.5
          bg-gray-600/75
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-600 hover:shadow-lg
          focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-600 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => {setToggle((prev) => !prev)}}
      >
        {props.name}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      
    </div>
    {toggle && <ul className='bg-gray-500 w-full'>
               <li><button onClick={(e) => handleChange(e)} value='starter' className='hover:bg-gray-400 w-full items-center'>Starter</button></li>
                <li><button onClick={(e) => handleChange(e)} value='Early-Bird' className='hover:bg-gray-400 w-full'>Early-bird</button></li>
                <li><button onClick={(e) => handleChange(e)} value='Professional' className='hover:bg-gray-400 w-full'>Proffesional</button></li>
                
        </ul>}
    
  </div>
  )
}

export default Functions