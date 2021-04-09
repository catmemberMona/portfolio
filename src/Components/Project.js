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
        <span style={{ fontSize: '14'}}>{title}</span>
      </div>
      <div>
        <Avatar src={image} />
      </div>
    </div>
  );
};

function ProjectInfo() {
  return (
    <div style={{flex: 3}}>
      <div>Status:</div>
      <div style={{ flex: 5 }}>
        Lots of textfjdksajfkfjdksafjdksafjksdjfkdsjafskafjksajf
      </div>
      <div>
        Tech used: 
      </div>
    </div>
  );
}

function Project({ title, image, content }){
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <ProjectNameAndImage title={title} image={image} />
      <ProjectInfo />
    </div>
  );
};

export default Project;

