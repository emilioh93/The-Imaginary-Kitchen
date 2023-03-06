import React from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Paragraph } from './components/Paragraph';
import {
  PARAGRAPH_1,
  PARAGRAPH_2,
  PARAGRAPH_3,
  PARAGRAPH_4,
  PARAGRAPH_5,
  PARAGRAPH_6,
} from '../../common/constants/about';

const About = () => {
  return (
    <Container>
      <Typography variant='h3' align='center' marginTop='2rem' gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paragraph>{PARAGRAPH_1}</Paragraph>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paragraph>{PARAGRAPH_2} </Paragraph>
          <Paragraph>{PARAGRAPH_3}</Paragraph>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src='https://i.ibb.co/z7XCt6y/2131885030-photo-of-a-chef-for-a-team-section-on-a-website-whose-specialty-is-strange-and-imaginary.png'
            alt='chef Maxine Lee'
            style={{
              width: useMediaQuery('(max-width: 600px)') ? '100%' : '80%',
            }}
          />
          <Typography
            variant='subtitle1'
            align='center'
            style={{ marginTop: '1rem' }}
          >
            Maxine Lee, Head Chef
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src='https://i.ibb.co/bX5Vvhb/446506095-photo-of-the-2-owners-of-a-restaurant-a-man-and-a-woman-for-a-team-section-on-a-website-wh.png'
            alt='Owners Sarah and David Johnson'
            style={{
              width: useMediaQuery('(max-width: 600px)') ? '100%' : '80%',
            }}
          />
          <Typography
            variant='subtitle1'
            align='center'
            style={{ marginTop: '1rem' }}
          >
            Sarah and David Johnson, Owners
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paragraph>{PARAGRAPH_4}</Paragraph>
          <Paragraph>{PARAGRAPH_5}</Paragraph>
        </Grid>
        <Grid item xs={12}>
          <Paragraph>{PARAGRAPH_6}</Paragraph>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
