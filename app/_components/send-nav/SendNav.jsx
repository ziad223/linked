import Image from 'next/image'
import React from 'react'
import logo from '../../../images/logo.svg';
import { FaSearch , FaShoppingCart  , FaPlus , FaRegBell, FaHeart   } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import './sendNav.css';
import { RiMenu3Fill } from "react-icons/ri";
import { FiHeart   } from "react-icons/fi";

export const metadata = {
    title: "Send Page",
  };
  
const SendNav = () => {
  return (
    <div className='sendNav'>
      <div className="sendNav-left">
      <Image src={logo} alt='logo'/>
      </div>
      <div className="sendNav-right">
        <ul>
            <li><a href="#"><FaSearch className='nav-link' /></a></li>
            <li><a href="#"><FaPlus  className='nav-link' /></a></li>
            <li><a href="#"><FaRegBell  className='nav-link' /></a></li>
            <span className='nav-span s'>50</span>
            <li><a href="#"><TiMessages className='nav-link' /></a></li>
            <span className='nav-span m'>20</span>

            <li><a href="#"><FiHeart  className='nav-link' /></a></li>
            <span className='nav-span h'>10</span>
            <li><a href="#"><FaShoppingCart className='nav-link' /></a></li>
            <li><a href="#"><RiMenu3Fill className='nav-link' /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default SendNav
