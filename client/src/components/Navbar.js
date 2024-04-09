import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href="/";
};

const Navbar = () => (
  
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="15px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', margin: '0px 0px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="20px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <a href="/count" style={{ textDecoration: 'none', color: '#3A1212' }}>Count Calories</a>
      <button  style={{ border: "none", outline:'none',padding:'8px 0', backgroundColor:"white" , borderRadius:'20px', fontWeight: 'bold',cursor:'pointer',marginRight:'20px'}} onClick={handleLogout}>
					Logout
			</button>
    </Stack>
  </Stack>
);

export default Navbar;



