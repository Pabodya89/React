import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderContent.css';
import Button from '@mui/material/Button';
import logo_light from '../../assets/whiebook2.jpg';
import logo_dark from '../../assets/book_d.png';
import toggle_light from '../../assets/light.png';
import toggle_dark from '../../assets/light2.png';


const HeaderContent = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo_dark : logo_light} alt="Logo" className="logo" />
      
      <div className="menu-links">
        <Button 
          color="inherit" 
          component={NavLink} 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </Button>
        <Button 
          color="inherit" 
          component={NavLink} 
          to="/about" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </Button>
        <Button 
          color="inherit" 
          component={NavLink} 
          to="/contact" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact Us
        </Button>
      </div>

      <img 
        onClick={toggle_mode} 
        src={theme === 'light' ? toggle_light : toggle_dark} 
        alt="Toggle Theme" 
        className="toggle-icon" 
      />
    </div>
  );
};

export default HeaderContent;
