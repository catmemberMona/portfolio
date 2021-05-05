import React from 'react';
import {
  Avatar,
  Typography,
  Link,
} from '@material-ui/core';


function ProjectNameAndImage({ title, image, video, links }){
  return (
    <div style={{ flex: 2, padding: '.5em' }}>
        {/* check if there is a video or image */}
        {image !== '' ? (
          <div style={styles.image}>
            {/* check if there is a deployed link  */}
            {links[1] ? (
              // make image clickable and send to deployed site 
              <a
                style={{ textDecoration: 'none', color: 'black' }}
                href={links[1]}
              >
                <img src={image} height='100%' />
              </a>
            ) : (
                // return regular image
              <img src={image} height='100%' />
            )}
          </div>
        ) : (
          <div style={styles.image}>{video}</div>
        )}
      </div>
  );
};

function ProjectInfo({ status, content, tech, links, notes }) {
  return (
    <div style={styles.description}>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Status: </span>
        {status}
      </Typography>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Links: </span>

        <a style={{ textDecoration: 'none', color: 'black' }} href={links[0]}>
          Github
        </a>
        {links[1] && (
          <span>
            {' '}
            |{' '}
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              href={links[1]}
            >
              Deployed Site
            </a>
          </span>
        )}
      </Typography>
      <Typography style={styles.spacing}>
        <div style={{ fontWeight: 800 }}>Description: </div>
        {content.map((paragraph) => (
          <Typography style={styles.spacing}>{paragraph}</Typography>
        ))}
      </Typography>
      {notes.length > 0 && (
        <Typography style={styles.spacing}>
          <span style={{ fontWeight: 800 }}>Notes: </span>
          <ul>
            {notes.map((note) => (
              <li style={styles.spacing}>{note}</li>
            ))}
          </ul>
        </Typography>
      )}
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Tech used: </span>
        {tech}
      </Typography>
    </div>
  );
}

function Project({ title, image, video, status, links, content, tech, notes }){
  return (
    <div style={styles.container}>
      <div>
        <Typography style={styles.projectTitle}>{title}</Typography>
      </div>
      <div style={styles.content}>
        <ProjectNameAndImage
          title={title}
          image={image}
          video={video}
          links={links}
        />
        <ProjectInfo
          status={status}
          content={content}
          tech={tech}
          links={links}
          notes={notes}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginTop: '1.5em',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  projectTitle: {
    fontWeight: 600,
    fontSize: '2em',
    marginBottom: ".4em",
    textAlign: 'center '

  },
  image: {
    display: 'block',
    height: '12em',
    width: 'auto',
    marginBottom: '3em',
  },
  content: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '1em',
    paddingBottom: '2em'
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    minWidth: 300,
    justifyContent: 'center',
    maxWidth: 800
    
  },
  spacing: {
    margin: '.3em'
  }
};

export default Project;

