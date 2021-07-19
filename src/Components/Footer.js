import React from 'react';
import {
  Grid,
  makeStyles,
  Avatar,
} from '@material-ui/core';

function Footer(props) {
  const {linkedin, github } = props.avatarImages;
  const classes = useStyles();

  return (
    <div style={{flex: 1, display: "flex", justifyContent: 'center'}}>
      <Grid container item xs={3} lg={1} align='center'>
                <Grid item className={classes.avatarLink}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/catmemberMona'
                  >
                    <Avatar
                      alt='github'
                      src={github}
                      className={classes.xsmall}
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
                      className={classes.xsmall}
                    >
                      L
                    </Avatar>
                  </a>
                </Grid>
              </Grid>
    </div>
    
  )
}

const useStyles = makeStyles((theme) => ({
  avatarLink: {
    flex: 1,
    marginBottom: ".5em",
    marginTop: ".5em",
  },
  xsmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));


export default Footer
