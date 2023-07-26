import "./Header.scss";
// import { useState,useContext,useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
// import Search from "./Search/Search"
// import Cart from '../Cart/Cart';
// import {Context} from '../../utils/context';
const Header =() =>{
    return(
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">XpressMart</div>
                <div className="right">
                    <BiSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon"><CgShoppingCart/>
                    <span>5</span>
                    </span>
                </div>
            </div>
        </header>
        );
};
export default Header;