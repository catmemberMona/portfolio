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
}));

export default Main;
