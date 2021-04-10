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
    <div style={{ maxWidth: 1200, margin: 'auto' }}>
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
    marginTop: '3.1em',
    fontWeight: 800,
    fontSize: '2.2em',
  },
  contentText: {
    fontSize: '1rem',
    lineHeight: 1.4,
  },
};

export default Projects;