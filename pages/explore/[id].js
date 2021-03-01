import { Button } from '@material-ui/core'
import React from 'react'
import server from '../../config'
import viewStyles from '../../styles/View.module.scss'
import StarIcon from '@material-ui/icons/Star'
import Link from 'next/link'
function ViewDetail({result}) {
    return (
        <div>
           
           <div className={viewStyles.view_container}>

               <div className={viewStyles.view_section}>
                   <div className={viewStyles.view_top}>
                        <div className={viewStyles.view_image}>
                            <img src={result.img}></img>
                        </div>
                   </div>
                   <div className={viewStyles.view_bottom}>
                       <div className={viewStyles.view_bottom_left}>
                        <div className={viewStyles.top}>
                        <h1>{result.location}</h1>
                        </div>
                        <div className={viewStyles.bottom}>
                           <h2>{result.description}</h2>
                        </div>
       
                       </div>
                       <div className={viewStyles.view_bottom_right}>
                       <div className={viewStyles.view_bottom_right_header}>
                       <h2>{result.price}/Night</h2> <div className={viewStyles.rating}><StarIcon className={viewStyles.icon}/> {result.rating}</div>
                       </div>
                       <div className={viewStyles.view_bottom_right_body}>
                            Lorem is availbale to use her papa. PLEAS MAKE SURE THAT ALL IS G
                       </div>
                       <div className={viewStyles.view_bottom_right_footer}>
                        <Button fullWidth variant='outlined' className={viewStyles.checkout_btn}>Check Out</Button>
                       
                       </div>
                       </div>
                   </div>
                   {/* <Link href='/explore'>
                       <a>

                       <Button  variant='outlined' className={viewStyles.cancel_btn}  >Cancel</Button>
                       </a>
                   </Link> */}


               </div>

           </div>
        </div>
    )
}


export const getServerSideProps = async (context)=>{

    const response = await fetch(`${server}/details/${context.params.id}`);
    const result =  await response.json()

return{
    props:{result}
}

}

export default ViewDetail
