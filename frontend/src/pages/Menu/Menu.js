import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { MENU } from '../../common/constants/menu';
import useCategory from '../../hooks/useCategory';
import { CategoryMenu } from './components/CategoryMenu';

const Menu = () => {
  const { categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Typography variant='h3' align='center' marginTop='2rem' gutterBottom>
        {MENU}
      </Typography>
      {categories.map(category => (
        <div key={category._id}>
          <Typography variant='h5' align='center' marginTop='2rem' gutterBottom>
            {category.name}
          </Typography>
          <Typography variant='body1' align='center' gutterBottom>
            {category.description}
          </Typography>
          <CategoryMenu category={category} />
        </div>
      ))}
    </Container>
  );
};

export default Menu;
