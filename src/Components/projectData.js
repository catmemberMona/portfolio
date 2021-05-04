import portfolioImg from '../Images/portfolioImg.png'
import memory from '../Images/memory.png'
import simon from '../Images/simon2.png'
import bellTower from '../Images/bellTowerOn.png'

export default [
  {
    title: "Mona's Portfolio",
    status: 'Ongoing',
    links: ['https://github.com/catmemberMona/portfolio'],
    content:
      "Tell me this doesn't look more visually pleasing compared to looking at my resume.",
    tech: 'Create-React-App, Material-UI, Github pages',
    image: portfolioImg,
  },
  {
    title: 'Hourly Bell Tower',
    status: 'Ongoing',
    links: ['https://github.com/catmemberMona/clockTowerBellReminderIOS'],
    content:
      'Time always flows forward and the speed of time does not change for individuals. Hourly Bell Tower reminds users that time is always moving forward.A bell will ring every hour every day, starting the user’s day with a set first bell and ending the day with the last bell. This application is for those that want an hourly reminder of the time without thinking about repeatedly setting and shutting off an alarm. A bell will sound for each notification, reminding the user an hour has past. Users can turn the notifications and sound off by tapping the screen and turn them back on by tapping the screen when needed. The user interface will change depending on if it is set to on or off. ',
    tech: 'Swift, Uikit',
    image: bellTower,
  },
  {
    title: 'Memory Maddening',
    status: 'Completed | Deployed',
    links: [
      'https://github.com/Jam52/mintbean-typing-karaoke',
      'https://memorymaddening.herokuapp.com/',
    ],
    content:
      'Test your memory and typing skill. This is a web broswer game created during the Mintbean weekly learnathon challenge. Completed with teammates Jamie and Scott. This game is not supported on the mobile browser.',
    tech:
      'React, CSS, Material-UI, React-Card-Flip, React-Countdown-Hook, React-Router-DOM, Random-Word-Api, Axios',
    image: memory,
  },
  {
    title: 'Diamond Memory Game',
    status: 'Ongoing',
    links: ['https://github.com/catmemberMona/simon-says'],
    content:
      'I was reminded of this good childhood game when I was playing the current popular game AmongUs. So I created a mobile version of it. It is currently not deployed, but will contain updates and be packaged to apple TestFlight in the future.',
    tech: 'React-Native, React, Async-Storage, React-Native-Sound',
    image: simon,
  },
  {
    title: 'scavengARescape',
    status: 'Completed',
    links: ['https://github.com/Capstone-E/ScavengAR-Escape'],
    content:
      'Enter portals and collect keys, all through the use of your mobile device and your body. This game was the starting point for my mobile development. ScavengARescape is my capstone project when attending FullStack Academy. Created with three of my fellow classmates: Kali, Ashley, and Kristi.',
    tech: 'ViroMedia (ViroReact), React, Redux',
    image: '',
    video: (
      <iframe
        display='block'
        width='79%'
        height='100%'
        src='https://www.youtube-nocookie.com/embed/VGoNcz_78Ns'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    ),
  },
];