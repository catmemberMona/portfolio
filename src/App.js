import React from 'react'
import { Grid, makeStyles, Avatar, Typography, Box, Container, Tabs, Tab, Link } from '@material-ui/core';
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
      <Container className={classes.nav} variant='h1'>
        <Grid
          container
          xs={12}
          direction='row'
          className={classes.navInner}
          alignItems='center'
        >
          {/* ICON of me */}
          <Grid item xs={1} lg={1}>
            <Avatar>Mona</Avatar>
          </Grid>
          {/* List of project links  */}
          <Grid container item xs={8} lg={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='simple tabs example'
              style={{ height: '3.5em' }}
            >
              <Tab
                label={<Link className={classes.navInner}>Item One</Link>}
                {...a11yProps(0)}
                style={{padding: 20}}
              />
              <Tab
                label={<Link className={classes.navInner}>Item Two</Link>}
                {...a11yProps(1)}
              />
              <Tab
                label={<Link className={classes.navInner}>Item Three</Link>}
                {...a11yProps(2)}
              />
            </Tabs>
          </Grid>
          {/* List of external links, linkedin etc  */}
          <Grid container item xs={3} lg={3}>
            <Grid item>Link One</Grid>
            <Grid item>Link Two</Grid>
            <Grid item>Link Three</Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Mona Name and Image first Look Section */}
      <div>
        <Container>
          <Typography
            variant='h2'
            align='center'
            className={classes.topSpacing}
          >
            Mona Zheng
          </Typography>
        </Container>
        <Container>
          <Avatar
            alt='Mona'
            src={mona}
            variant='square'
            className={classes.extraLarge}
          />
        </Container>
      </div>
      {/* About Mona Section */}
      <div className={classes.aboutMe}>
        <Container>
          <Typography variant='h4' className={classes.topSpacing}>
            About Mona
          </Typography>
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in volun proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor i exercitation ullamco laboris nisi ut aliquip ex ea
            commodoum.
          </p>
        </Container>
        {/* External Links  */}
        <Container>
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
                <Avatar alt='linkedin' src={linkedin} className={classes.small}>
                  L
                </Avatar>
              </a>
            </Grid>
          </Grid>
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
  },
  topSpacing: {
    marginTop: '1em',
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
    width: theme.spacing(24),
    height: theme.spacing(24),
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
    height: 600,
  },
}));

export default App;
