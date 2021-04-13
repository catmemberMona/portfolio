import React from 'react';
import {
  Avatar,
  Typography,
  Link,
} from '@material-ui/core';


function ProjectNameAndImage({ title, image, video }){
  return (
    <div style={{ flex: 2 }}>
      <div>
        <Typography style={styles.projectTitle}>{title}</Typography>
      </div>
      <div>
        {image !== '' ?
          <div style={styles.image}>
            <img src={image} height="100%" />
          </div>
          :
          <div style={styles.image}>
            {video}
          </div>
        }
        
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

function Project({ title, image, video, content }){
  return (
    <div style={styles.container}>
      <ProjectNameAndImage title={title} image={image} video={video} />
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
    display: 'block',
    height: '16em',
    width: '100%',
    marginBottom: '3em',
  },
  description: {
    paddingTop: "5em",
    paddingLeft: '5em',
    flex: 2
  }
};

export default Project;

