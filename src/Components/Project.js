import React from 'react';
import {
  Avatar,
  Typography,
  Link,
} from '@material-ui/core';


function ProjectNameAndImage({ title, image }){
  return (
    <div style={{ flex: 2 }}>
      <div>
        <Typography style={styles.projectTitle}>{title}</Typography>
      </div>
      <div>
        <Avatar src={image} variant='rounded' style={styles.image} />
      </div>
    </div>
  );
};

function ProjectInfo() {
  return (
    <div style={styles.description}>
      <Typography>Status:</Typography>
      <Typography>
        Lots of textfjdksajfkfjdksafjdksafjksdjfkdsjafskafjksajf
      </Typography>
      <Typography>
        Tech used: 
      </Typography>
    </div>
  );
}

function Project({ title, image, content }){
  return (
    <div style={styles.container}>
      <ProjectNameAndImage title={title} image={image} />
      <ProjectInfo />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginTop: '1.5em',
  },
  projectTitle: {
    fontWeight: 1000,
    fontSize: '1.2em',
    paddingTop: ".5em",
    marginBottom: ".5em"
  },
  image: {
    height: '15em',
    width: 'auto',
    marginBottom: '3em',
  },
  description: {
    paddingTop: "5em",
    paddingLeft: '3em',
    flex: 2
  }
};

export default Project;

