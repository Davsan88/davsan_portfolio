import quizzicalImage from './assets/images/quizzical.png'
import assemblyImage from './assets/images/assembly.png'
import watchlistImage from './assets/images/watchlist.png'

const header = {
  homepage: 'https://davsan88.netlify.app/',
  title: 'DS.',
}

const about = {
  name: 'David Sanchez',
  role: 'Front End Developer',
  picture: '',

  description:
    'I focus on building clean, responsive, and user-driven applications. I work mainly with JavaScript, React, and modern CSS — turning ideas into real, interactive experiences.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/david-sanchez-1995ab268/',
    github: 'https://github.com/Davsan88',
  },
}

const projects = [
  {
    name: 'Quizzical',
    description:
      `Quizzical is a responsive trivia quiz app, that fetches five multiple-choice questions from the Open Trivia Database API, lets players choose their answers, then provides visual feedback, a final score, and the option to play again with a fresh set of questions.`,
    stack: ['CSS3', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Davsan88/quizzical-react',
    livePreview: 'https://quizzical-davsan.netlify.app/',
    image: quizzicalImage
  },
  {
    name: 'Assembly: Endgame',
    description:
      `This is a React word-guessing game inspired by Hangman.

      Players must guess the hidden word before every programming language is "erased from existence", with dynamic game states, visual feedback, and plenty of personality along the way.`,
    stack: ['CSS3', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Davsan88/hangman-react/tree/main',
    livePreview: 'https://assembly-davsan.netlify.app/',
    image: assemblyImage
  },
  {
    name: 'Show Watchlist App',
    description:
      'This is a responsive movie and TV watchlist app powered by the TMDB API, where users can search for shows, explore results, and save titles to a personal watchlist.',
    stack: ['CSS3', 'JavaScript', 'TMDB API'],
    sourceCode: 'https://github.com/Davsan88/movie-watchlist-app',
    livePreview: 'https://watchlist-app-davsan.netlify.app/',
    image: watchlistImage
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Router',
  'REST APIs',
  'Material UI',
  'Git',
  'CI/CD',
  'AWS',
  'Azure',
]

const contact = {
  email: 'david.sanchez.martinez@outlook.com',
}

export { header, about, projects, skills, contact }
