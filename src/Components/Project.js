import React from 'react';
import {
  Avatar,
  Typography,
  Link,
} from '@material-ui/core';


function ProjectNameAndImage({ title, image, video }){
  return (
    <div style={{ flex: 2, padding: '.5em' }}>
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

function ProjectInfo({ status, content, tech }) {
  return (
    <div style={styles.description}>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Status: </span>
        {status}
      </Typography>
      <Typography style={styles.spacing}>{content}</Typography>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Tech used: </span>
        {tech}
      </Typography>
    </div>
  );
}

function Project({ title, image, video, status, content, tech }){
  return (
    <div style={styles.container}>
      <ProjectNameAndImage title={title} image={image} video={video} />
      <ProjectInfo status={status} content={content} tech={tech}/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginTop: '1.5em',
    flexWrap: 'wrap'
  },
  projectTitle: {
    fontWeight: 400,
    fontSize: '2em',
    paddingTop: ".5em",
    marginBottom: ".4em"
  },
  image: {
    display: 'block',
    height: '16em',
    width: '100%',
    marginBottom: '3em',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    minWidth: 300,
    justifyContent: 'center',
    
  },
  spacing: {
    margin: '.3em'
  }
};

export default Project;

