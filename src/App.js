import { Grid, makeStyles, Avatar, Typography, Box } from '@material-ui/core';
// import { mona, linkedin, github } from './Images'
import mona from './Images/mona.jpeg';
import linkedin from './Images/linkedin.png';
import github from './Images/github.png';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* About Mona Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant='h2'
            align='center'
            className={classes.topSpacing}
          >
            Mona Zheng
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} align='center'>
          <Box>
            <Avatar alt='Mona' src={mona} className={classes.medium} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Box>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in volun proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor i exercitation ullamco laboris nisi ut aliquip ex
                ea commodoum.
              </p>
            </Box>
            <Box>
              <Grid
                xs={12}
                item
                container
                direction='row'
                justify='flex-end'
                alignItems='center'
              >
                <a target='github' href='https://github.com/catmemberMona'>
                  <Avatar alt='github' src={github} className={classes.small} />
                </a>
                <a
                  target='linkedin'
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '3em'
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
    margin: '2px 10px'
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
}));

export default App;
