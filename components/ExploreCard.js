import React,{useEffect} from 'react'
import exploreCardStyles from '../styles/ExploreCard.module.scss'
import StarIcon from '@material-ui/icons/Star'
function ExploreCard({detail}) {
  
    
    return (
        <div className={exploreCardStyles.card}>
        <div className={exploreCardStyles.card_img}>
            {/* <img src="/assets/falls.jpg"/> */}
           
            <img src={detail.img}/>
        </div>
        <div className={exploreCardStyles.card_footer}>
            <div className={exploreCardStyles.rating}>

        <StarIcon className={exploreCardStyles.starIcon}/> <span>{detail.rating}</span>
            </div>
 

    <h3>
    {detail.title}
        </h3>
        <div className={exploreCardStyles.price}>
            <span>
            <strong>
         {detail.price}
                </strong>
                </span> / night
        </div>


        </div>
    </div>
    )
}

export default ExploreCard
