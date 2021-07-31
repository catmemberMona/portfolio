import React from 'react';
import {
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';





function AboutMe(props) {
  const classes = useStyles();

  return (
    <div id='aboutMe' className={classes.aboutMe} style={{ maxWidth: 1200 }}>
      <Container maxWidth={false}>
        <Typography className={classes.subHeading}>About Mona</Typography>
        <div
          style={{ maxWidth: 900, marginRight: 'auto' }}
          className={classes.contentText && classes.spacing}
        >
          <Typography className={classes.subHeadingTwo}>Programming</Typography>
          <Typography variant='body1'>
            <Typography className={classes.quotes}>
              "Machines will take over the world."
            </Typography>
            <Typography>
              This sentence is quite dramatic. Instead, I would say that they
              would just multiply and one day expand outward from Earth.
              Machines are already in our daily lives, but human's are still the
              controllers.
            </Typography>
            <Typography>
              Every room in my house has at least one object that has been
              programmed to function for a specific purpose, including my
              toothbrush which is in the bathroom. Almost all humans have a
              small device attached to them willingly full of applications that
              have been programmed to entertain, assist, de-stress, etc. So why
              do I want to program? Instead the question would be, how could I
              not.
            </Typography>
          </Typography>
          <Typography className={classes.subHeadingTwo}>
            How I Started
          </Typography>
          <Typography style={{ marginBottom: '1em' }} variant='body1'>
            I started coding after becoming curious about Virtual
            Reality/Augmented Reality applications, and I wanted to know how to
            create them. As someone that didn’t know much about tech and how to
            get started, I decided to start with web development instead. Since
            then, I learned javascript on my own and then attended a bootcamp
            for full stack web development. I practiced the tech I learned by
            working on projects and collaborating in group projects. Currently
            I’m working on my own web and mobile applications.
          </Typography>
          <Typography className={classes.subHeadingTwo}>
            Short Term Goals - IOS Mobile Development
          </Typography>
          <Typography variant='body1'>
            One reason would be because I myself enjoy leaving my house and
            using applications on my phone. The main reason is that mobile
            phones have more versatility in what they can do, especially
            with how portable they are.
          </Typography>
          <Typography className={classes.subHeadingTwo}>
            Long Term Goal - Robotics and Machine Learning
          </Typography>
          <Typography variant='body1'>
            Even though I still think that working with virtual
            reality/augmented reality applications would be interesting, I feel
            that progressing towards robotics and using machine learning is more
            in line with what I want to work on to make a positive impact for
            people.
          </Typography>
          <Typography className={classes.subHeadingTwo}>
            Personal Interests
          </Typography>
          <Typography variant='body1'>
            In my free time, I enjoy reading novels, taking walks in the park
            during a sunny day, and casual games.
          </Typography>
        </div>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    paddingTop: '8em',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: '1px 1px',
  },
  subHeading: {
    fontWeight: 600,
    fontSize: '3em',
    marginBottom: '1em',
  },
  subHeadingTwo: {
    marginTop: '.5em',
    fontWeight: 400,
    fontSize: '2em',
    marginBottom: '.4em',
  },
  contentText: {
    fontSize: '1rem',
    lineHeight: 1.4,
  },
  quotes: {
    padding: '0 0 1em 1em',
    fontStyle: 'italic'
  },
  spacing: {   
    paddingBottom: '2em'
    
  }
}));

export default AboutMe;
