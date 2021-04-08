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
      <div
        className={classes.aboutMe}
        style={{ maxWidth: 1800, margin: 'auto' }}
      >
        <Container maxWidth='false'>
          <Typography className={classes.subHeading}>About Mona</Typography>
        </Container>
        <Container maxWidth='false'>
          <div
            style={{ maxWidth: 1400, marginRight: 'auto' }}
            className={classes.contentText}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volun proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor i exercitation ullamco laboris nisi ut aliquip ex
              ea commodoum.
            </p>
          </div>
        </Container>
        {/* External Links  */}
        <Container maxWidth='false'>
          <div style={{ maxWidth: 1800, margin: 'auto' }}>
            <Grid container xs={4} lg={2} className={classes.externalLinks}>
              <Grid item className={classes.avatarLink}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/catmemberMona'
                >
                  <Avatar alt='github' src={github} className={classes.small} />
                </a>
              </Grid>
              <Grid item className={classes.avatarLink}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/mona-a-zheng/'
                >
                  <Avatar
                    alt='linkedin'
                    src={linkedin}
                    className={classes.small}
                  >
                    L
                  </Avatar>
                </a>
              </Grid>
            </Grid>
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
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: '1px 1px',
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

export default AboutMe;
