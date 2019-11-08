import React from 'react';
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'



const Header = () =>{
    return(
        <header className ="header ">
            <div className ="logo"> POC Shop</div>
            <input className= "searchBar" type="search" />
            <div className ="icon">
                <FontAwesomeIcon icon = {faShoppingCart} size={"2x"} />
                <span>(0)</span>

            </div>
            
        </header>
    )
}

export default Header;
