import React from 'react';
import {
  Container,
  Typography,
  Paper
} from '@material-ui/core';
import topics from './projectData'
import Project from './Project';

function Projects() {
  let keyCount = 0;
  return (
    <div style={styles.projectsContainer}>
      <div id='projects' style={{ maxWidth: 1200, margin: 'auto' }}>
        <Container maxWidth={false}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{flex:1}}>
              <Typography style={styles.subHeading}>Projects</Typography>
            </div>
            <div style={{flex:5}}>
              {topics.map((topic) => {
                return (
                  <div style={{ marginTop: '1em' }} key={keyCount+=1}>
                    <Paper style={{ padding: '2em' }}>
                      <Project {...topic} />
                    </Paper>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

const styles = {
  subHeading: {
    paddingTop: '1.5em',
    fontWeight: 600,
    fontSize: '3em',
    color: "lightgrey"
  },
  projectsContainer: {
    backgroundColor: 'rgba(0, 4, 39, 0.9)',
    borderTop: '0.5px solid rgba(43, 34, 7, .1)',
    borderBottom: '0.5px solid rgba(43, 34, 7, .1)',
    marginTop: '5em',
    paddingBottom: '1em',
  },
};

export default Projects;