import { Button } from '@material-ui/core'
import React from 'react'
import bannerStyles from '../styles/Banner.module.scss'
import Link from 'next/link'
function Banner() {


const handleClick = ()=>{

    
}


    return (
      
        <div className={bannerStyles.banner}>
            <div className={bannerStyles.explore_section}>
                <h3>Adventure <span className={bannerStyles.await} >Awaits</span> </h3>
                {/* <h1>Near</h1> */}
              
                <Link href='/explore'>
                
                    <Button className={bannerStyles.explore_btn}>Explore nearby stays</Button>
                </Link>
                
                
            </div>
        </div>
    )
}

export default Banner
