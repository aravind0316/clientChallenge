import { useEffect, useState } from "react";
import React from "react";
import Main from "./Main";

export const FilterContext = React.createContext();
export default function App() {
  const [search,setSearch] = useState('');
  const [plan,setPlan] = useState('');
  const [renue,setRenue] = useState('');
  const [toggle,setToggle] = useState(false);
  const [selection,setSelection] = useState('');

  return (

    <div className="flex flex-col md:flex-row h-screen w-screen bg-white">
     <div className="flex flex-col items-center bg-gray-500 rounded-lg w-1/5 w-full md:w-1/4 md:h-full h-flex lg:h-full" >
      <h1 className="font-bold bg-blue-400 rounded w-full">Search</h1>
     <input
      type="text"
      className="
        form-control
        block
        mt-5
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Name"
      onChange={(e) => setSearch(e.target.value)}
    />
    <input
      type="text"
      className="
        form-control
        block
        mt-5
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Plan"
      onChange={(e) => setSelection(e.target.value)}
    />
    <input
      type="text"
      className="
        form-control
        block
        mt-5
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Renue"
      onChange={(e) => setRenue(e.target.value)}
    />


      </div>
    <FilterContext.Provider value={{search,selection,renue}}>
      <Main />
      </FilterContext.Provider>
    </div>
  )
}
