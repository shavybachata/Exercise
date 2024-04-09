import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#3A606E" fontWeight="600" fontSize="26px">Wellness Wave</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#3A606E', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontSize="20px" fontFamily="Alegreya" lineHeight="35px" marginRight="60%" marginTop="20px">
    Unlock your full potential with our certified gym trainers. From customized workout plans to expert advice, embark on a fitness journey that's guided by the best.    </Typography>
    <Stack>
      <a href="https://docs.google.com/spreadsheets/d/1cl1S3QKZ9GxN9pCnX569OB-xwJ4YSWffeOq5O_xqbSc/edit?usp=sharing" style={{ marginTop: '35px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#6aa2b8', padding: '12px', fontSize: '17px', textTransform: 'none', color: 'white', borderRadius: '6px', marginLeft:'10px' }}>Personal training</a>
    </Stack>
    <Stack></Stack>
    <Typography fontWeight={600} color="#3A606E" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '150px',marginTop: '1px'}}>
      Wellness Wave
    </Typography>
    <img style={{opacity:"0.9"}} src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;