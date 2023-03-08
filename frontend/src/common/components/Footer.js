import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  Tooltip,
} from '@mui/material';
import { LEGAL, RECOGNITIONS, SOCIAL_MEDIA } from '../constants/footer';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      The Imaginary Kitchen - Emilio Hurtado {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: '2rem',
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <List>
              {RECOGNITIONS.map(recognition => (
                <ListItem key={recognition.id}>
                  <ListItemIcon>
                    <EmojiEventsIcon />
                  </ListItemIcon>
                  <ListItemText
                    key={recognition.id}
                    primary={recognition.name}
                    sx={{ color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <List>
              {SOCIAL_MEDIA.map(item => (
                <Tooltip key={item.id} title={item.tooltip}>
                  <ListItem component={Link} to={item.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                </Tooltip>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <List>
              {LEGAL.map(item => (
                <Tooltip key={item.id} title={item.tooltip}>
                  <ListItem component={Link} to={item.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                </Tooltip>
              ))}
            </List>
            <List></List>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
