import React,{useState} from 'react'
import SeacrhIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import Link from 'next/link'
import navbarStyles from '../styles/Navbar.module.scss'
function Navbar() {
const [showMenu, setShowMenu] =  useState(false)

    return (
        <>
        
        
        <div className={navbarStyles.navbar}>
            <div className={navbarStyles.logo_section} >
                <Link href='/'>
                    <a>

                <p>UgTours</p>
                    </a>
                </Link>
                {/* <img className={navbarStyles.brand_logo} src="https://blog.stronglogos.com/wp-content/uploads/2014/08/airbnb_horizontal_lockup_web.png" /> */}
            </div>
        <div className={navbarStyles.middle_section}>
        <div className={navbarStyles.navbar_search}>

<input type="text" placeholder="Start your search"/>
<div className={navbarStyles.search_section}>
<SeacrhIcon className={navbarStyles.searchIcon}></SeacrhIcon>
</div>
</div>
        </div>




            <nav>
            <Button className={navbarStyles.signin} onClick={()=>setShowMenu(!showMenu)} >
                <MenuIcon/>
               <AccountCircleIcon className={navbarStyles.signin_avatar}/>
            </Button>

            </nav>
            


            {/* #FF385C !important */}
            {/* <div className={navbarStyles.navbar_search}>
                <input type="text" placeholder="Start your search"/>
                <div className={navbarStyles.search_section}>
                <SeacrhIcon className={navbarStyles.searchIcon}></SeacrhIcon>
                </div>

            </div> */}

            {/* <div className={navbarStyles.navbar_login_section}> */}
            {/* <Button className={navbarStyles.hostbtn}>Become a host</Button> */}
            {/* <Button className={navbarStyles.langbtn}>
                <LanguageIcon />
            </Button> */}
{/*             
            <Button className={navbarStyles.signin}>
                <MenuIcon/>
               <AccountCircleIcon className={navbarStyles.signin_avatar}/>
            </Button>
           */}
          

            {/* </div> */}
           
        </div>

        <div className={!showMenu && navbarStyles.hide} >
        <div className={navbarStyles.dropdown_menu}>
    <div className={navbarStyles.dropdown_items}>
        <a>Login</a>
        <a>Sign in</a>
    </div>

    </div>

        </div>
 
        </>
    )
}

export default Navbar
