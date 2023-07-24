import "Header.scss";
import { useState,useContext,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search"
import Cart from './components/Cart';
import {Context} from './utils/context'; 

const Header =() =>{
    return(
        <header className="main-header">
            <div className="header-content">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
            </div>
        </header>
        );
};
export default Header;