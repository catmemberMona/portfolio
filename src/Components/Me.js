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
    <div style={{ maxWidth: 1200, margin: 'auto' }}>
      <Container maxWidth={false}>
        <Typography
          align='center'
          className={classes.heading}
        >
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
    fontSize: '3.5em',
  },
}));

export default Me;