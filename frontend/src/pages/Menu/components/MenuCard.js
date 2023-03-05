import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MenuCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 250,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        image={item.image}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>
        <Typography variant='body1' color='text.secondary' gutterBottom>
          {item.price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
