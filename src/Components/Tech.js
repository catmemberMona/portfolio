import React from 'react';
import { Card } from '@material-ui/core';

let technology = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
];

const Tech = () => {
  return (
    <div style={styles.content}>
      {technology.map(row => {
        return (
          <div style={styles.row}>
            {row.map(tech => {
              return <div>{tech}</div>
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
    margin: '5vw'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default Tech