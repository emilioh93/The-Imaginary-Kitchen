import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {
  GO_TO_MENU_BUTTON,
  GO_TO_MENU_TEXT,
  WELCOME_DESCRIPTION_1,
  WELCOME_DESCRIPTION_2,
  WELCOME_TITLE,
} from '../../../common/constants/homePage';
import image1 from '../../../assets/image_of_a_restaurant.png';
import image2 from '../../../assets/image_of_a_restaurant_2.png';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    name: 'Image of a restaurant',
    image: image1,
  },
  {
    id: 2,
    name: 'Image of a restaurant 2',
    image: image2,
  },
];

const Welcome = () => {
  return (
    <Container>
      <Typography variant='h3' align='center' marginTop='2rem' gutterBottom>
        {WELCOME_TITLE}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='h5'
            align={useMediaQuery('(max-width: 600px)') ? 'center' : 'justify'}
            marginTop='2rem'
          >
            {WELCOME_DESCRIPTION_1}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Carousel>
            {items.map(item => (
              <Box
                key={item.id}
                height='100%'
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <img src={item.image} alt={item.name} />
              </Box>
            ))}
          </Carousel>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h5'
            align={useMediaQuery('(max-width: 600px)') ? 'center' : 'justify'}
            marginTop='2rem'
          >
            {WELCOME_DESCRIPTION_2}
          </Typography>
          <Typography variant='h4' align='center' marginTop='2rem'>
            {GO_TO_MENU_TEXT}
          </Typography>
          <Button
            component={Link}
            to='/menus'
            variant='contained'
            size='large'
            sx={{ marginTop: '2rem' }}
          >
            {GO_TO_MENU_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
