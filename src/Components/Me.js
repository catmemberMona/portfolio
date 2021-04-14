import React from 'react';
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';

function Me(props) {
  const classes = useStyles();
  const mona = props.avatarImage;

  return (
    <div id='me' style={{ maxWidth: 1200, margin: 'auto' }}>
      <div style={{ marginBottom: '5em', visibility: 'hidden', marginTop: '-5em' }}>Just spacing</div>
      <Container maxWidth={false}>
        <Typography align='center' className={classes.heading}>
          Mona Zheng
        </Typography>
      </Container>
      <Container maxWidth={false}>
        <Avatar
          alt='Mona'
          src={mona}
          variant='square'
          className={classes.extraLarge}
        />
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  extraLarge: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 510,
    minHeight: 510,
  },
  heading: {
    marginTop: '.5em',
    fontWeight: 800,
    padding: '.35em',
    fontSize: '4.5em',
  },
}));

export default Me;