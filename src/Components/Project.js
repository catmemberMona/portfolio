import React from 'react';
import {
  Typography,
} from '@material-ui/core';


function ProjectImage({ title, images, video, links }){
  return (
    <div
      style={{
        flex: 2,
        ...styles.content,
        backgroundColor: 'rgba(43, 34, 7, .2)',
        border: '.5px solid rgba(43, 34, 7, .3)',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* check if there is a video or images */}
      {images.length > 0 ? (
        <div style={styles.image}>
          {images.map(image => {
            return (
              //check if there is a deployed link  
              links[1] ? (
                // make image clickable and send to deployed site
                <a
                  style={{ textDecoration: 'none', color: 'black' }}
                  href={links[1]}
                >
                  <img
                    src={image}
                    style={styles.singleImage
                    
                    }
                    height='100%'
                  />
                </a>
               ) : (
                // return regular image
                <img
                  src={image}
                  style={styles.singleImage}
                  height='100%'
                />
              )
            )
              }
            )
          }
        </div>
      ) : (
        <div style={styles.image}>{video}</div>
      )}
    </div>
  );
};

function ProjectInfo({ status, content, tech, links, notes }) {
  return (
    <div style={(styles.description, styles.content)}>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Status: </span>
        {status}
      </Typography>
      <Typography style={styles.spacing}>
        <span style={{ fontWeight: 800 }}>Links: </span>
        {links.map((link) => {
          console.log(link)
          return (
            <span>
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
        }
          
          
     
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
          <span style={{ fontWeight: 800 }}>Notes:</span>
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
    display: 'block',
    height: '12em',
    width: 'auto',
  },
  singleImage: {
    marginLeft: '2em',
    marginRight: '2em',
    border: '4 black solid',
    borderRadius: 3,
  },
  content: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    // minWidth: 300,
    justifyContent: 'center',
    maxWidth: 800,
  },
  spacing: {
    margin: '.3em',
  },
};

export default Project;

