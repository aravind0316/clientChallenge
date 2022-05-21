import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FilterContext } from './App';

const Main = () => {
    const {search, selection, renue} = React.useContext(FilterContext);
    const [persons,setPersons] = useState([]);
    const printData = async (rest) => {
      // for(var i =0; i < )
      await rest.data.map((rt) => console.log(rt.name))
      // console.log(persons)
      // console.log(persons + 'hi')
    }
    const addItem = (re) => {
      setPersons([...persons,re]);
    }
    const getData = async () => {
        
       await axios.get('http://localhost:3001/').then((rt) => setPersons(rt.data)).then(console.log(persons))
       console.log()
       
    }
  useEffect(() => {
    getData();
  },[])
  
  return (
    <div>
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Number
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
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.name}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.email}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tap.number}
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