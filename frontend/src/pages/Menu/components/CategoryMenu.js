import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import useMenu from '../../../hooks/useMenu';
import MenuCard from './MenuCard';

export const CategoryMenu = ({ category }) => {
  const { menu, getMenu } = useMenu();

  const filteredMenu = menu?.filter(item => item.category._id === category._id);

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={2}>
      {filteredMenu?.map(item => (
        <Grid key={item._id} item xs={12} sm={6} md={4}>
          <MenuCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
