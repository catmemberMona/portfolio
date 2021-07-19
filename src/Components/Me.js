import React from 'react';
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';
import water from '../Images/water.jpeg';

function Me(props) {
  const classes = useStyles();

  return (
    <div id='me' style={{ maxWidth: 1200, margin: 'auto' }}>
      <div
        style={{ marginBottom: '5em', visibility: 'hidden', marginTop: '-5em' }}
      >
        Just spacing
      </div>
      <Container maxWidth={false}>
        <Typography align='center' className={classes.heading}>
          name: "Mona Zheng"
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
          <i>Mona's Feet</i> at Coney Island Beach 2019
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  extraLarge: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 260,
    minHeight: 210,
  },
  smallText: {
    marginTop: '.5em',
    fontWeight: 400,
    // padding: '.35em',
    fontSize: '.8em',
  },
  heading: {
    marginTop: '.5em',
    fontWeight: 400,
    padding: '.35em',
    fontSize: '7em',
  },
}));

export default Me;