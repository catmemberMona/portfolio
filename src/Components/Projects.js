import React from 'react';
import {
  Divider,
  Container,
  Typography,
} from '@material-ui/core';
import topics from './projectData'
import Project from './Project';

function Projects() {
  return (
    <div
      style={{
        backgroundColor: 'rgba(43, 34, 7, .2)',
        borderTop: '0.5px solid rgba(43, 34, 7, .1)',
        borderBottom: '0.5px solid rgba(43, 34, 7, .1)',
        marginTop: '5em',
        marginBottom: '5em'
      }}
    >
      <div id='projects' style={{ maxWidth: 1200, margin: 'auto' }}>
        <Container maxWidth={false}>
          <div>
            <Typography style={styles.subHeading}>Projects</Typography>
          </div>
          <div>
            {topics.map((topic) => {
              return (
                <div>
                  <Project {...topic} />
                  <Divider inset={true} />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

const styles = {
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
  subHeading: {
    paddingTop: '1.5em',
    fontWeight: 600,
    fontSize: '3em',
  },
  contentText: {
    fontSize: '1rem',
    lineHeight: 1.4,
  },
};

export default Projects;