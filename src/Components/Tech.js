import React from 'react';
import { Card } from '@material-ui/core';

import metalbg from '../Images/metalbground.jpeg'
import technology from '../Images/techImages'

const Tech = () => {
  return (
    <div style={styles.content}>
      {technology.map(row => {
        return (
          <div style={styles.row}>
            {row.map(image => {
              return image ? (
                <Card style={styles.techSize} raised={true}>
                  {image !== metalbg ? (
                    <img src={image}  
                      style={styles.tech}
                    />
                  ) : (
                    <img src={image} style={styles.metal} />
                  )}
                </Card>
              ) : (
                <div style={styles.space} />
              );
            })}
          </div>)
      })}

    </div>
  )
}

let styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5vw',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  techSize: {
    width: 'max(3vw, 20px)',
    height: 'max(3vw, 20px)',
    margin: '.2vw',
    display: 'flex',
    justifyContent: 'center',
  },
  tech: {
    flex: 1,
    margin: '.2vw',
    borderRadius: 5,
  },
  metal: {
    backgroundImage: `url(${metalbg})`,
    flex: 1,
    border: '.5px solid darkgrey',
  },
  space: {
    width: 'max(3vw, 20px)',
    height: 'max(3vw, 20px)',
    margin: '.2vw',
  },
};

export default Tech