import React from 'react'
import { Grid, makeStyles, Avatar, Typography, Box, Container, Tabs, Tab, AppBar, Link } from '@material-ui/core';
// import { mona, linkedin, github } from './Images'
import mona from './Images/mona.jpeg';
import linkedin from './Images/linkedin.png';
import github from './Images/github.png';




function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* Navigation Section  */}
      <AppBar
        position='sticky'
        style={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0px 1px 8px rgb(221,221,221)',
        }}
      >
        <Container className={classes.nav} variant='h1' maxWidth='false'>
          <div style={{ maxWidth: 1700, margin: 'auto' }}>
            <Grid
              container
              xs={12}
              lg={12}
              direction='row'
              className={classes.navInner}
              alignItems='center'
            >
              {/* ICON of me */}
              <Grid item xs={2} lg={1}>
                <Avatar alt='Mona' src={mona} className={classes.medium} />
              </Grid>
              {/* List of project links  */}
              <Grid container item xs={8} lg={9}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='simple tabs example'
                  style={{ height: '3em', paddingTop: '.9em' }}
                  TabIndicatorProps={{
                    style: { height: '8px', backgroundColor: '#DC143C' },
                  }}
                >
                  <Tab
                    label={
                      <Link className={classes.navInner} underline='none'>
                        Item One
                      </Link>
                    }
                    {...a11yProps(0)}
                    style={{ padding: 20 }}
                  />
                  <Tab
                    label={
                      <Link className={classes.navInner} underline='none'>
                        Item Two
                      </Link>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={
                      <Link className={classes.navInner} underline='none'>
                        Item Three
                      </Link>
                    }
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Grid>
              {/* List of external links, linkedin etc  */}
              <Grid container item xs={2} lg={2} align='right'>
                <Grid item className={classes.avatarLink}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/catmemberMona'
                  >
                    <Avatar
                      alt='github'
                      src={github}
                      className={classes.small}
                    />
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
            </Grid>
          </div>
        </Container>
      </AppBar>
      {/* Mona Name and Image first Look Section */}
      <div style={{ maxWidth: 1800, margin: 'auto' }}>
        <Container maxWidth='false'>
          <Typography
            align='center'
            className={classes.topSpacing && classes.heading }
          >
            Mona Zheng
          </Typography>
        </Container>
        <Container maxWidth='false'>
          <Avatar
            alt='Mona'
            src={mona}
            variant='square'
            className={classes.extraLarge}
          />
        </Container>
      </div>
      {/* About Mona Section */}
      <div
        className={classes.aboutMe}
        style={{ maxWidth: 1800, margin: 'auto' }}
      >
        <Container maxWidth='false'>
          <Typography className={classes.subHeading}>
            About Mona
          </Typography>
        </Container>
        <Container maxWidth='false'>
          <div style={{ maxWidth: 1400, marginRight: 'auto' }} className={classes.contentText}>
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
    marginTop: '1em'
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
    lineHeight: 1.4
  }
}));

export default App;
