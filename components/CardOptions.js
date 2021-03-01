import React from 'react'
import cardStyles from '../styles/Card.module.scss'
import {useRouter} from 'next/router'
function CardOptions({feature}) {
const router  = useRouter();
    const navigate = ()=>{
        router.push('/explore')
    }

    return (
        

        
        <div className={cardStyles.card} onClick={navigate}>
            <div className={cardStyles.card_img}>
                <img src={feature.img}/>
            </div>
            <div className={cardStyles.card_footer}>
        <h2>{feature.title}</h2>
        <h3>
            {feature.description}
        </h3>


            </div>
        </div>
       
    )
}

export default CardOptions
