import "./Header.scss";
import { useState, useContext, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
// import Search from "./Search/Search"
// import Cart from '../Cart/Cart';
// import {Context} from '../../utils/context';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handlescroll = () => {
        const offset = window.scrollY;
        // console.log(offset);
        if (offset > 100) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handlescroll)
    }, [])
    return (
        <header className={`main-header ${scrolled ? 'sticky-header' : ''} `}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">XpressMart</div>
                <div className="right">
                    <BiSearch />
                    <AiOutlineHeart />
                    <span className="cart-icon"><CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    );
};
export default Header;