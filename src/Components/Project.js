import React from 'react';
import {
  Typography,
} from '@material-ui/core';


function ProjectImage({ images, video }) {
  let imagesCount = images.length
  return (
    <div style={styles.imageContent}>
      {/* check if there is a video or images */}
      {images.length > 0 ? (
        <div style={styles.image}>
          {images.map((image) => {
            return (
              // return regular image
              <img
                alt={image}
                className='projectImg'
                src={image}
                style={styles.singleImage}
                height='100%'
                key={(imagesCount -= 1)}
              />
            );
          })}
        </div>
      ) : (
        <div style={styles.image}>
          {video}
        </div>
      )}
    </div>
  );
};

function ProjectInfo({ status, content, tech, links, notes }) {
  let keyCount = 0
  return (
    <div style={(styles.description, styles.content)}>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Status: </span>
        {status}
      </Typography>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Links: </span>
        {links.map((link) => {
          return (
            <span key={keyCount+=1}>
              {'   '}
              🔗
              <a
                style={{ textDecoration: 'none', color: 'brown' }}
                href={link.link}
              >
                {link.to}
              </a>
            </span>
          );
        })}
      </Typography>
      <div style={styles.spacing}>
        <div style={{ fontWeight: 800}}>Description: </div>
        {content.map((paragraph) => (
          <Typography style={styles.spacing} key={keyCount+=1}>
            {paragraph}
          </Typography>
        ))}
      </div>
      {notes.length > 0 && (
        <Typography style={styles.spacing}>
          <span style={{ fontWeight: 800, display: 'block' }}>Notes:</span>
            {notes.map((note) => (
              <span display='block' style={{ ...styles.spacing, display: 'block' }} key={keyCount+=1}>
                {note}
              </span>
            ))}
        </Typography>
      )}
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Tech used: </span>
        {tech}
      </Typography>
    </div>
  );
}

function Project({ title, images, video, status, links, content, tech, notes }){
  return (
    <div style={styles.container}>
      <div>
        <Typography style={styles.projectTitle}>{title}</Typography>
      </div>
        <ProjectImage
          title={title}
          images={images}
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
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginTop: '1.5em',
    flexDirection: 'column',
  },
  projectTitle: {
    fontWeight: 600,
    fontSize: '2em',
    marginBottom: '.4em',
    textAlign: 'center ',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    height: '12em',
    width: 'auto',
  },
  singleImage: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    border: '1 black solid',
    borderRadius: 3,
    boxShadow: '0 1px 15px rgba(43, 34, 7, .5)',
  },
  content: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  imageContent: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
    backgroundColor: 'rgba(43, 34, 7, .3)',
    boxShadow: 'inset 0 0 6px rgba(43, 34, 7, .5)',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    maxWidth: 800,
  },
  spacing: {
    margin: '.3em',
  },
};

export default Project;

