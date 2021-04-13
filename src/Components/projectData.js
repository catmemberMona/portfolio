import mona from '../Images/mona.jpeg'
import memory from '../Images/memory.png'
import simon from '../Images/simon2.png'

export default [
  {
    title: "Mona's Portfolio",
    status: 'Ongoing - Github: ',
    content: 'Better looking presentation of projects compared to the resume.',
    tech: 'Create-React-App, Material-UI, Github pages',
    image: mona,
  },
  {
    title: 'Memory Maddening',
    status: 'Complete - Github, Deployed - Heroku',
    content:
      'Test your memory and typing skill. Web broswer game created during the Mintbean weekly learnathon challenge. Completed with teammates Jamie and Scott. Not supported for mobile browser.',
    tech: 'Create-React-App, etc',
    image:
      memory,
  },
  {
    title: 'Simon',
    status: 'Complete - Github: ',
    content: 'This is the 3rd content of the application',
    tech: '',
    image:
      simon,
  },
  {
    title: 'scavengARescape',
    status: 'Complete - Github: ',
    content:
      'This is the 4th content of the application, this is a long content that needs to be show partially',
    tech: '',
    image: '',
    video: (
      <iframe
        display='block'
        width='100%'
        height='110%'
        src='https://www.youtube-nocookie.com/embed/VGoNcz_78Ns'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    ),
  },
];