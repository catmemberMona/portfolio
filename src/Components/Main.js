import React from 'react';
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Box,
  Container,
  Tabs,
  Tab,
  AppBar,
  Link,
} from '@material-ui/core';
import mona from '../Images/mona.jpeg';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

import Nav from './Nav';
import Me from './Me'
import AboutMe from './AboutMe'

function Main(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* Navigation Section  */}
      <Nav avatarImages={{ mona, linkedin, github }} handleChange={handleChange} setValue={setValue} value={value}/>
      {/* Mona Name and Image first Look Section */}
      <Me avatarImage={mona} />
      {/* About Mona Section */}
      <AboutMe avatarImages={{ mona, linkedin, github }} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: '1em',
  },
  nav: {
    minHeight: 70,
    height: '6em',
    fontFamily: 'Roboto, sans-serif',
  },
  navInner: {
    height: '100%',
    fontSize: '1.55em',
    fontWeight: 500,
    color: 'black',
    textDecoration: 'none',
  },
  aboutMe: {
    // backgroundColor: 'rgba(255, 209, 0, 1)',
    // border: '.2px solid rgba(255, 200, 0, .6)',
    // padding: '.5em'
  },
  externalLinks: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  avatarLink: {
    flex: 1,
    marginTop: '1em',
  },
  topSpacing: {
    marginTop: '2em',
  },
  container: {
    flex: 1,
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: '1px 1px',
  },
  medium: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: '.5px darkred solid',
  },
  large: {
    width: theme.spacing(34),
    height: theme.spacing(34),
    marginTop: theme.spacing(2),
    border: '1px purple solid',
  },
  extraLarge: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 750,
    minHeight: 750,
  },
  heading: {
    marginTop: '.3em',
    fontWeight: 800,
    padding: '.5em',
    fontSize: '5em',
  },
  subHeading: {
    marginTop: '3em',
    fontWeight: 600,
    fontSize: '2.5em',
  },
  contentText: {
    fontSize: '1.4rem',
    lineHeight: 1.4,
  },
}));

export default Main;
