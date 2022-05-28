import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FilterContext } from './App';
import {AiOutlineCiCircle} from 'react-icons/ai'

const Main = () => {
    const {search, selection, renue,persons,setPersons,plan,setPlan} = React.useContext(FilterContext);

    
    
    const getData = async () => {
      await axios.get('http://localhost:3001/', {
        name: "Noami",
        number: "(120) 4732224",
        email: "njest1@uol.com.br",
        plan: plan,
        start: "2019-07-10T04:00:00.000Z",
        renue: "Annually",
        status: "Active",
      }).then((rt) => setPersons(rt.data)).then(console.log(persons));        
      //  await axios.get('http://localhost:3001/')
      //  console.log()
       
    }
  useEffect(() => {
    getData();
  },[])
  
  return (
    <div className='md:px-9'>
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className=" bg-gray-200 rounded-lg">
            <tr>
              <th scope="col" Name="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Detail
              </th>
              <th>
                Plan
              </th>
              <th>
                Start
              </th>
              <th>
                Renue
              </th>
            </tr>
          </thead>
          <tbody>
            {persons.filter(item => {
              if(search == ""){
                return item
              }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return(item)
              }
            }).filter((item) => {
              if(selection == ""){
                return item
              }else if(item.plan.toLowerCase().includes(selection.toLowerCase())){
                return(item)
              }
            }).filter((item) => {
              if(renue == ""){
                return item
              }else if(item.renue.toLowerCase().includes(renue.toLowerCase())){
                return(item)
              }
            }).map((tap) => {
                return(
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td class="flex flex-row text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div className='rounded-full font-bold text-gray-400 bg-gray-300 h-10 w-10 flex justify-center'><p className='pt-2'>BM</p></div>
                      <div className='px-4 flex flex-col'>
                        <div className='font-bold'><h1>{tap.name}</h1></div>
                        <div><p>Login 5hago</p></div>
                        
                        </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div className='flex flex-col'>
                        <div className='font-semibold'>
                          {tap.number}
                        </div>
                        <div className='text-gray-400 font-thin'>
                        {tap.email}
                        </div>
                      </div>
                     
                    </td>
                    
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.plan}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.start}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.renue}
                    </td>
                 </tr>
                )
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Main