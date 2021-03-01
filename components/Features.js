


import React, { useContext } from 'react'

import FeatureSyles from '../styles/Feature.module.scss'
import CardOptions from './CardOptions'
import { ServiceContext } from './Context/ServiceContext'


function Features() {

    
    const {features} = useContext(ServiceContext)
        

 
    

    return (
        <>
        <div className={FeatureSyles.header}><h2>Features</h2></div>
        <div className={FeatureSyles.card_container}>
           
  
  
       {features.map((feature)=>(
          
          
           <CardOptions  feature={feature} key={feature.id}/>
         
           
           
           ))}
          
          
        </div>
        </>
    )
}






export default Features
