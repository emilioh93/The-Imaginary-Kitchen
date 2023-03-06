import React from 'react';
import { Typography, useMediaQuery } from '@mui/material';

export const Paragraph = ({ children }) => {
  return (
    <Typography
      variant='h5'
      align={useMediaQuery('(max-width: 600px)') ? 'center' : 'justify'}
      gutterBottom
    >
      {children}
    </Typography>
  );
};
