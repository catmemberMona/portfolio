import React from 'react';
import {
  Grid,
  makeStyles,
  Avatar,
  Container,
  Tabs,
  Tab,
  AppBar,
  Link,
} from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Nav(props) {
  const { mona, linkedin, github } = props.avatarImages;
  const { value, handleChange } = props;
  const classes = useStyles();

  return (
    <AppBar
      position='sticky'
      style={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0px 1px 8px rgb(221,221,221)',
      }}
    >
      <Container className={classes.nav} variant='h1' maxWidth={false}>
        <div style={{ maxWidth: 1700, margin: 'auto' }}>
          <Grid
            container
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
          </Grid>
        </div>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
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
  medium: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: '.5px darkred solid',
  },
}));

export default Nav;