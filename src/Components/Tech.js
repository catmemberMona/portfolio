import React from 'react';
import { Avatar } from '@material-ui/core';

let technology = [
  [
    1,
    2,
    3,
    undefined,
    5,
    6,
    7,
    undefined,
    9,
    10,
    11,
    undefined,
    13,
    undefined,
    15,
  ],
  [
    undefined,
    2,
    undefined,
    undefined,
    5,
    undefined,
    undefined,
    undefined,
    9,
    undefined,
    undefined,
    undefined,
    13,
    undefined,
    15,
  ],
  [
    undefined,
    2,
    undefined,
    undefined,
    5,
    6,
    7,
    undefined,
    9,
    undefined,
    undefined,
    undefined,
    13,
    14,
    15,
  ],
  [
    undefined,
    2,
    undefined,
    undefined,
    5,
    undefined,
    undefined,
    undefined,
    9,
    undefined,
    undefined,
    undefined,
    13,
    undefined,
    15,
  ],
  [
    undefined,
    2,
    undefined,
    undefined,
    5,
    6,
    7,
    undefined,
    9,
    10,
    11,
    undefined,
    13,
    undefined,
    15,
  ],
];

const Tech = () => {
  return (
    <div style={styles.content}>
      {technology.map(row => {
        return (
          <div style={styles.row}>
            {row.map(tech => {
              return tech ? (
                <Avatar style={styles.techSize}>{tech}</Avatar>
              ) : (
                <div style={styles.techSize} />
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
  },
};

export default Tech