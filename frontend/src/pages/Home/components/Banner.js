import { Box, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../assets/Soba_Noodles_with_spicy_chocolate_sauce_and_grilled_squid.png';
import { BANNER_TEXT } from '../../../common/constants/homePage';

const Banner = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: { sm: '300px', md: '500px' },
          width: '100%',
          position: 'relative',
        }}
      >
        <img
          src={banner}
          alt='Soba_Noodles_with_spicy_chocolate_sauce_and_grilled_squid'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Typography
          sx={{
            fontSize: { xs: '1.2rem', sm: '2rem', md: '3rem' },
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            textShadow: '2px 2px 4px #000000',
          }}
        >
          {BANNER_TEXT}
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
