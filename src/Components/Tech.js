import React from 'react';
import { Avatar } from '@material-ui/core';

import metalbg from '../Images/metalbground.jpeg'
import {
  apple, cocoapods, css, expressjs, firebase, git, github, html, javascript, nodejs, postgresql, reactImg, reduxImg, sequelizeImg
  , swiftImg, vscodeImg, xcodeImg
} from '../Images/techImages'

let technology = [
  [
    metalbg,
    metalbg,
    apple,
    undefined,
    metalbg,
    cocoapods,
    css,
    undefined,
    expressjs,
    firebase,
    metalbg,
    undefined,
    git,
    undefined,
    metalbg,
  ],
  [
    undefined,
    github,
    undefined,
    undefined,
    metalbg,
    undefined,
    undefined,
    undefined,
    metalbg,
    undefined,
    undefined,
    undefined,
    metalbg,
    undefined,
    metalbg,
  ],
  [
    undefined,
    metalbg,
    undefined,
    undefined,
    html,
    metalbg,
    javascript,
    undefined,
    metalbg,
    undefined,
    undefined,
    undefined,
    nodejs
    ,
    metalbg,
    postgresql,
  ],
  [
    undefined,
    metalbg,
    undefined,
    undefined,
    metalbg,
    undefined,
    undefined,
    undefined,
  reduxImg,
    undefined,
    undefined,
    undefined,
    metalbg,
    undefined,
    reactImg,
  ],
  [
    undefined,
    sequelizeImg,
    undefined,
    undefined,
    metalbg,
    metalbg,
    swiftImg,
    undefined,
    metalbg,
    metalbg,
    vscodeImg,
    undefined,
    xcodeImg,
    undefined,
    metalbg,
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
                <Avatar style={styles.techSize} src={tech} variant='rounded' />
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
    // backgroundColor: 'darkgrey',
    // border: '1px darkGrey solid',
  },
  space: {
    width: 'max(3vw, 20px)',
    height: 'max(3vw, 20px)',
    margin: '.2vw',
    // backgroundColor: 'rgba(0, 4, 39, 0.9)',
    // border: '1px darkGrey solid',
  },
};

export default Tech