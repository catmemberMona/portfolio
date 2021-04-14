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
  useScrollTrigger,
  Slide
} from '@material-ui/core';


// HELPER FUNCTIONS 
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}



// NAV COMPONENT
function Nav(props) {
  const { mona, linkedin, github } = props.avatarImages;
  const { value, handleChange } = props;
  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
      <AppBar
        position='sticky'
        style={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0px 1px 8px rgb(221,221,221)',
        }}
      >
        <Container className={classes.nav} variant='h1' maxWidth={false}>
          <div style={{ maxWidth: 1100, margin: 'auto' }}>
            <Grid
              container
              direction='row'
              className={classes.navInner}
              alignItems='center'
            >
              {/* ICON of me */}
              <Grid item xs={2} lg={1}>
                <Link href='#me'>
                  <Avatar
                    alt='Mona'
                    variant='rounded'
                    src={mona}
                    className={classes.medium}
                  />
                </Link>
              </Grid>
              {/* List of project links  */}
              <Grid container item xs={8} lg={9}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='simple tabs example'
                  style={{ height: '3.85em', paddingTop: '1.6em' }}
                  TabIndicatorProps={{
                    style: { height: '0px', backgroundColor: '#DC143C' },
                  }}
                >
                  <Tab
                    label={
                      <Link
                        className={classes.navInner}
                        href='#aboutMe'
                        underline='none'
                      >
                        About Me
                      </Link>
                    }
                    {...a11yProps(0)}
                    style={{ padding: 20 }}
                  />
                  <Tab
                    label={
                      <Link
                        href='#projects'
                        className={classes.navInner}
                        underline='none'
                      >
                        Projects
                      </Link>
                    }
                    {...a11yProps(1)}
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
    </HideOnScroll>
  );
}

const useStyles = makeStyles((theme) => ({
  nav: {
    minHeight: 70,
    height: '6em',
    fontFamily: 'Roboto, sans-serif',
    display: 'relative',
  },
  navInner: {
    height: '100%',
    fontSize: '1.1em',
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
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: '1px 1px',
  },
  medium: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: '1px darkGrey solid',
  },
}));

export default Nav;