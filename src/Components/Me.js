import React from 'react';
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';
import water from '../Images/water.jpeg';

function Me() {
  const classes = useStyles();

  return (
    <div id='me' style={{ maxWidth: 1200, margin: 'auto' }}>
      <div
        style={{ marginBottom: '5em', visibility: 'hidden', marginTop: '-5em' }}
      >
        Just spacing
      </div>
      <Container maxWidth={false}>
        <Typography align='left' className={[classes.heading, classes.topText]}>
          <span className={classes.key}>name:</span> Mona Zheng
        </Typography>
        <Typography align='left' className={classes.heading}>
          <span className={classes.key}>profession:</span> Software Developer
        </Typography>
        <Typography align='left' className={classes.heading}>
          <span className={classes.key}>focus:</span> iOS Development
        </Typography>
      </Container>
      <Container maxWidth={false}>
        <Avatar
          alt='Mona'
          src={water}
          variant='square'
          className={classes.extraLarge}
        />
        <Typography align='left' className={classes.smallText}>
          <i>Receding Wave Over Toes</i>, Coney Island Beach 2019
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  extraLarge: {
    marginTop: theme.spacing(6),
    width: '100%',
    height: 150,
    minHeight: 130,
  },
  smallText: {
    marginTop: '.5em',
    fontWeight: 400,
    fontSize: '.8em',
  },
  key: {
    fontWeight: 500,
    color: 'darkblue',
  },
  topText: {
    marginTop: '3em',
  },
  heading: {
    fontWeight: 400,
    padding: '1vh',
    fontSize: 'max(3.5vw, 30px)',
  },
}));

export default Me;