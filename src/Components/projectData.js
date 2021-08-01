import portfolioImg from '../Images/portfolioImg1.png'
import memory from '../Images/memory.png'
import simon1 from '../Images/simonStart.png'
import simon2 from '../Images/simon2.png'
import simon3 from '../Images/simon1.png'
import comingSoon from '../Images/coming-soon.png'


let topics = [
  {
    title: 'Plus One',
    status: 'Ongoing',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/catmemberMona/relatabilityPoll',
      },
    ],
    content: [
      'Plus One is an application for users to view and react to statements. They can also see how other users have reacted.',
      'Plus One is still being worked on. I used Figma to create the design for my application, and sketched wireframes using a notebook and pen.',
      "At this moment, users whom haven't logged in can see a list of statement cards with information that is retrieved from the cloud database, Firebase Firestore. I've also integrated Google Sign - In for users to create an account with my application.",
    ],
    notes: [],
    tech: 'Swift, UIKit, XCTest, Google Sign-In, Firebase Firestore, App Center',
    images: [comingSoon],
  },
  {
    title: "Mona's Portfolio",
    status: 'Ongoing | Deployed',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/catmemberMona/portfolio',
      },
    ],
    content: [
      "Tell me this doesn't look more visually pleasing compared to looking at my resume.",
    ],
    notes: [],
    tech: 'Create-React-App, Material-UI, Github pages',
    images: [portfolioImg],
  },
  {
    title: 'Hourly Bell Tower',
    status: 'Completed | Deployed',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/catmemberMona/clockTowerBellReminderIOS',
      },
      {
        to: 'TestFlight',
        link: 'https://testflight.apple.com/join/Dny44tK0',
      },
      {
        to: 'Apple Store',
        link: 'https://apps.apple.com/app/hourly-bell-tower/id1564141557',
      },
    ],
    content: [
      'Time flows forward and the speed of time does not change for individuals.',
      'Hourly Bell Tower reminds users that time is always moving forward. A bell will ring every hour every day, starting the user’s day with a set first bell and ending the day with the last bell.',
      'This application is for those that want an hourly reminder of the time without having to think about repeatedly setting and shutting off an alarm.',
      `A bell will sound for each notification, reminding the user an hour has past. Users can turn the notifications and sound off by tapping the screen and turn them back on by tapping the screen when needed. \n
        The user interface will change depending on if it is set to an on or off state.`,
    ],
    notes: [
      'Version with onboarding/introduction scene is up on TestFlight - install TestFlight on your IOS device before clicking on the TestFlight Link',
    ],
    tech: 'Swift, Uikit',
    images: [],
    video: (
      <iframe
        display='block'
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/4-waVSHXh4s'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: 'Memory Maddening',
    status: 'Completed | Deployed',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/Jam52/mintbean-typing-karaoke',
      },
      {
        to: 'Deployed site',
        link: 'https://memorymaddening.herokuapp.com/',
      },
    ],
    content: [
      'Tests your memory and typing skills. The user will see a card that displays a word before being flipped. The user will then quickly and accurately type the word before the card flips again, showing a new word.',
      'This is a web browser game created with a team during the Mintbean weekly learnathon challenge. Completed with teammates Jamie and Scott.',
      
    ],
    notes: ['This game is not supported on the mobile browser.'],
    tech: 'React, CSS, Material-UI, React-Card-Flip, React-Countdown-Hook, React-Router-DOM, Random-Word-Api, Axios',
    images: [memory],
  },
  {
    title: 'Diamond Memory Game',
    status: 'Ongoing',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/catmemberMona/simon-says',
      },
      {
        to: 'TestFlight',
        link: 'https://testflight.apple.com/join/gXU6yfi4',
      },
    ],
    content: [
      'I was reminded of this good childhood game when I was playing the current popular game AmongUs. So I created a mobile version of it.',
    ],
    notes: [
      "Currently available for beta testing on Apple's TestFlight App - install TestFlight on your IOS device before clicking on the TestFlight Link",
    ],
    tech: 'React-Native, React, Async-Storage, React-Native-Sound',
    images: [simon1, simon2, simon3],
  },
  {
    title: 'scavengARescape',
    status: 'Completed',
    links: [
      {
        to: 'Github',
        link: 'https://github.com/Capstone-E/ScavengAR-Escape',
      },
    ],
    content: [
      'Enter portals and collect keys, all through the use of your mobile device and your body. This game was the starting point for my mobile development. ScavengARescape is my capstone project when attending FullStack Academy. Created with three of my fellow classmates: Kali, Ashley, and Kristi.',
    ],
    notes: [],
    tech: 'ViroMedia (ViroReact), React, Redux',
    images: [],
    video: (
      <iframe
        display='block'
        width='100%'
        height='100%'
        src='https://www.youtube-nocookie.com/embed/VGoNcz_78Ns'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    ),
  },
];

export default topics