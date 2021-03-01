import React, { useContext } from 'react'
import exploreStyles from '../../styles/Explore.module.scss'
import ExploreCard from '../../components/ExploreCard'
import axios from 'axios'
import server  from '../../config'
import Link from 'next/link'


function index({results}) {
    
    return (
        <div>

     
        <div className={exploreStyles.explore_container}>
            <div className={exploreStyles.explore_header}>

            <h2>Unleash your travel.</h2>
            </div>
            <div className={exploreStyles.explore_results}>

            <div className={exploreStyles.explore_cards_container}>

        {results.map(result=>(
            
            <Link href="/explore/[id] " as={`/explore/${result.id}`}>
            <a>
            <ExploreCard detail = {result}   key={result.id} />

            </a>
             </Link>
         
            
        ))}
        
           
           
            </div>
               
               
              
            </div>
            </div>
        </div>
    )
}


export const getStaticProps = async ()=>
{
    const response = await  fetch(`${server}/details`);
    const results = await response.json();

    return{
        props:{results}
    }
   
  
    


    

}




export default index
