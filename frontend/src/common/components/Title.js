import { Typography } from '@mui/material';
import React from 'react';

const Title = ({ children }) => {
  return (
    <Typography variant='h4' align='center' gutterBottom marginTop='1rem'>
      {children}
    </Typography>
  );
};

export default Title;
