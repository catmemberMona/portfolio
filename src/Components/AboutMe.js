import React from 'react';
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';





function AboutMe(props) {
  const { linkedin, github } = props.avatarImages;

  const classes = useStyles();

  return (
    <div className={classes.aboutMe} style={{ maxWidth: 1200, margin: 'auto' }}>
      <Container maxWidth={false} >
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
            Programming Interests
          </Typography>
          <Typography variant='body1'>
            Robotics would be my long term goal, but something that I currently
            want to dive deeper into would be mobile applications, ios
            specifically. One reason would be because I myself enjoy leaving my
            house and using applications on the go.
          </Typography>
          <Typography className={classes.subHeadingTwo}>
            Personal Interests
          </Typography>
          <Typography variant='body1'>
            In my free time, I enjoy reading novels, taking walks in the park
            during a sunny day, and casual games. A new interest is staring at
            the line in stocks as it goes up and down and curved.
          </Typography>
        </div>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
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
    marginTop: '3.1em',
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
