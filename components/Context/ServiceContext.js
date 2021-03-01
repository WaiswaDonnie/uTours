import axios from "axios";
import { createContext, useEffect, useState } from "react";
import server from "../../config";

import  { useRouter } from 'next/router' 

export const ServiceContext =  createContext();

export const ServiceContextProvider = ({children})=>{
const [features, setFeatures] = useState([]);



useEffect(() => {

     

    axios.get(`${server}/features`).then(res =>{

        const results = res.data
        setFeatures(results)
        
        
    })
  
   
}, [setFeatures])



// const getFeatures = async ()=>{

//     const response = await axios.get(`${server}/api/features`);
//     const results = response.data
  
//     // setFeatures(results)
//     console.log(results)
// }

return (
    <ServiceContext.Provider value={{features}}>
        {children}
    </ServiceContext.Provider>
)
    

}