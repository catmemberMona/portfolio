import React from 'react';
import { Avatar, Card } from '@material-ui/core';

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
            {row.map(image => {
              return image ? (
                <Card style={styles.techSize}>
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
  },
  space: {
    width: 'max(3vw, 20px)',
    height: 'max(3vw, 20px)',
    margin: '.2vw',
  },
};

export default Tech