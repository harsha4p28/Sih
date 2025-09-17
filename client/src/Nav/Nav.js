import React from 'react';
import './Nav.css';
import logo from '../Assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navContainer'>
        <div className='navMainContainer'>
            <div className='navLogo'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' />
                </Link>
                <h2>FRA ATLAS</h2>

            </div>
            <div className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/complaint'>Complaint</Link>
                <Link to='/graph'>Graph</Link>

            </div>
            <div className='navProfile'>
                <img src='' alt='profile' />
            </div>
        </div>
      
    </div>
  )
}

export default Nav
