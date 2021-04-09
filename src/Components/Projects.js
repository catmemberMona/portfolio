import React from 'react';
import {
  Divider,
  Container,
} from '@material-ui/core';
import topics from './projectData'
import Project from './Project';

function Projects() {
  return (
    <Container maxWidth={false}>
      <div style={{ maxWidth: 1800, margin: 'auto' }}>
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
  );
}

export default Projects;