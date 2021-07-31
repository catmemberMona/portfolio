import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import mona from '../Images/mona.jpg';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

import Nav from './Nav';
import Me from './Me'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'
import Tech from './Tech'

function Main() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* Navigation Section  */}
      <Nav
        avatarImages={{ mona, linkedin, github }}
        handleChange={handleChange}
        setValue={setValue}
        value={value}
      />
      {/* Mona Name and Image first Look Section */}
      <Me avatarImage={mona} />
      {/* About Mona Section */}
      <AboutMe avatarImages={{ mona }} />
      <Tech />
      {/* Projects Section  */}
      <Projects />
      <Footer avatarImages={{ linkedin, github }} />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default Main;
