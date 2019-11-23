import { pickRandom, randomNumber } from '../utils'
import { LARGE, MEDIUM, SMALL } from './stat-deltas'

const soccerTeams = [
  'Feyenoord',
  'Vitesse',
  'Juventus',
  'FC Milan',
  'Heerenveen',
  'NAC',
  'Manchester United',
  'PSV',
  'AZ',
  'Willem II',
  'ADO Den Haag',
]

export default [
  {
    id: 'ajaxWins',
    description: () => {
      const win = randomNumber(1, 5)
      const loss = randomNumber(0, win - 1)
      return `Ajax wint met ${win}-${loss} van ${pickRandom(soccerTeams)}!`
    },
    choices: [
      {
        name: 'Ok dan!',
        actions: [{ type: 'updateStats', joy: SMALL }, { type: 'nextCard' }],
      },
      {
        name: 'Yes, zuipe!',
        actions: [
          { type: 'updateStats', joy: MEDIUM, money: -SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'ajaxLoses',
    description: () => `Ajax verliest van ${pickRandom(soccerTeams)}…`,
    choices: [
      {
        name: 'Klote',
        actions: [{ type: 'updateStats', joy: -MEDIUM }, { type: 'nextCard' }],
      },
      {
        name: 'Ok, zuipe!',
        actions: [
          { type: 'updateStats', joy: -SMALL, money: -SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'dontFeelLikeWorking',
    description: 'Pfff, geen zin om te werken vandaag…',
    choices: [
      {
        name: 'Niet zeuren',
        actions: [
          { type: 'updateStats', joy: -SMALL, money: MEDIUM },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Blijf thuis',
        actions: [
          { type: 'updateStats', money: -MEDIUM, energy: SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'TiesCalls',
    description:
      'Ties belt laat vanuit Israël. Hij heeft een luisterend oor nodig.',
    choices: [
      {
        name: 'Praat moed in',
        actions: [
          { type: 'updateStats', energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Niet nu',
        actions: [{ type: 'updateStats', joy: -SMALL }, { type: 'nextCard' }],
      },
    ],
  },
  {
    id: 'carBrokeDown',
    description: 'Verdomme, de auto start niet.',
    choices: [
      {
        name: 'Bel ANWB',
        actions: [
          { type: 'updateStats', money: -SMALL, energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Pak het OV',
        actions: [
          { type: 'updateStats', energy: -MEDIUM },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'nightWithChristine',
    description: 'Vanavond heb je een avond met Christine…',
    choices: [
      {
        name: 'Blijf thuis',
        actions: [
          { type: 'updateStats', joy: MEDIUM, energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Eropuit!',
        actions: [
          { type: 'updateStats', joy: MEDIUM, money: -SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'playSquashWithChristine',
    description: 'Je gaat squashen met Christine.',
    choices: [
      {
        name: 'Laat haar winnen',
        actions: [{ type: 'updateStats', joy: SMALL }, { type: 'nextCard' }],
      },
      {
        name: 'Ze gaat eraan',
        actions: [
          { type: 'updateStats', joy: -SMALL, energy: SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'running',
    description: 'Je wilt gaan hardlopen, maar het regent.',
    choices: [
      {
        name: 'Niet zeuren',
        actions: [
          { type: 'updateStats', joy: -SMALL, energy: MEDIUM },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Sla over',
        actions: [
          { type: 'updateStats', energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'friendsBirthday',
    description: () => {
      const person = pickRandom([
        'Abbe',
        'Eveline',
        'Niek',
        'Francine',
        'Karel',
        'Nettie',
        'Rosa',
        'Jonas',
      ])
      return `${person} is jarig en geeft een feestje. Wie rijdt terug?`
    },
    choices: [
      {
        name: 'Berend',
        actions: [
          { type: 'updateStats', joy: SMALL, energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Christine',
        actions: [
          { type: 'updateStats', joy: MEDIUM, energy: -MEDIUM },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'specialtyBeer',
    description: 'Oeh, lekker speciaalbiertje. Welke neem je?',
    choices: [
      {
        name: 'Affligem Blond (6,8%)',
        actions: [
          { type: 'updateStats', joy: SMALL, energy: -SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Rochefort 10 (11,3%)',
        actions: [
          { type: 'updateStats', joy: MEDIUM, energy: -MEDIUM },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'defqon',
    description: 'Defqon komt eraan. Maar is dat wel verstandig?',
    choices: [
      {
        name: 'Misschien niet',
        actions: [
          { type: 'updateStats', joy: -SMALL, money: SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: 'Tuurlijk wel!',
        actions: [
          {
            type: 'updateStats',
            joy: LARGE,
            energy: -LARGE,
            money: -LARGE,
          },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  {
    id: 'birthday',
    description: 'Bijna jarig! Wanneer vier je het?',
    choices: [
      {
        name: '31 december',
        actions: [
          { type: 'updateStats', joy: SMALL, money: SMALL },
          { type: 'nextCard' },
        ],
      },
      {
        name: '7 januari',
        actions: [
          { type: 'updateStats', joy: -SMALL, money: MEDIUM },
          { type: 'nextCard' },
        ],
      },
    ],
  },
]
