import { useEffect, useState } from "react";
import React from "react";
import Main from "./Main";
import Bttn from "./Functions"
import Button2 from "./Button2";
import Status from "./Status";
import axios from 'axios';


export const FilterContext = React.createContext();
export default function App() {
  const [search,setSearch] = useState('');
  const [plan,setPlan] = useState('');
  const [renue,setRenue] = useState('');
  const [status,setStatus] = useState('');
  const [toggle,setToggle] = useState(false);
  const [toggle1,setToggle1] = useState(false);
  const [toggle2,setToggle2] = useState(false);
  const [selection,setSelection] = useState('');
  const [persons,setPersons] = useState([]);

  const handleClick = async (e) => {
    await axios.post('http://localhost:3001/plan',{
      name: "Noami",
      number: "(120) 4732224",
      email: "njest1@uol.com.br",
      plan: plan,
      renue: renue,
      status: status,
    }).then((rt) => setPersons(rt.data))
}


  return (

    <div className="flex flex-col md:flex-row h-screen w-screen bg-white">
      <FilterContext.Provider value={{renue,setRenue,status,setStatus,search,selection,renue,toggle,setToggle,handleClick, toggle1,setToggle1,toggle2,setToggle2,persons,setPersons,plan,setPlan }}>
        <div className="flex flex-col  bg-gray-200 rounded-lg w-1/5 w-full md:w-1/4 md:h-full h-flex lg:h-full" >
          <h1 className="font-bold bg-blue-400 rounded w-full">Search</h1>
        <input
          type="text"
          className="form-control block mt-5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          id="exampleFormControlInput1"
          placeholder="Search"
          onChange={(e) => setRenue(e.target.value)}
        />
          <div class="flex justify-center w-full mt-5 px-3.5 py-3.5 ">
          <Bttn  name="Plan"/>
              </div>
          
          <div class="flex justify-center w-full mt-2 px-3.5 py-3.5">
          <Button2 name="Renue"/>
              </div>
          <div class="flex justify-center w-full mt-2 px-3.5 py-3.5">
          <Status name="Status"/>
              </div>
              
          </div>
          <Main />
      </FilterContext.Provider>
    </div>
  )
}
