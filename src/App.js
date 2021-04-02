import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* About Mona Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Mona Zheng</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Image is here</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>NOTHING IS SUPPOSE TO BE HERE!</p>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default App;
