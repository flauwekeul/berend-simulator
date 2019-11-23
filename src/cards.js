import { pickRandom, randomNumber } from './utils'

// orders of magnitude in which a stat (energy, money, joy) can change
const SMALL = 10
const MEDIUM = 20
const LARGE = 30

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

// todo: use card types to filter: common, terminal, series, story
export default {
  gameOver: {
    id: 'gameOver',
    unique: true,
    description: 'Helaas, je hebt verloren.',
    choices: [
      {
        name: 'Opnieuw',
        // fixme: implement startOver
        actions: [{ type: 'startOver' }],
      },
      {
        name: 'Nogmaals',
        actions: [{ type: 'startOver' }],
      },
    ],
  },
  tinder1: {
    id: 'tinder1',
    unique: true,
    description: 'Klara, 46 jaar, houdt van puzzelen en zitten.',
    choices: [
      {
        name: 'Nee',
        actions: [{ type: 'nextCard', id: 'tinder2' }],
      },
      {
        name: 'Ja',
        actions: [{ type: 'nextCard', id: 'gameOver' }],
      },
    ],
  },
  tinder2: {
    id: 'tinder2',
    unique: true,
    description: 'Simone, 23 jaar, ze lijkt niet heel slim.',
    choices: [
      {
        name: 'Nee',
        actions: [{ type: 'nextCard', id: 'tinder3' }],
      },
      {
        name: 'Ja',
        actions: [{ type: 'nextCard', id: 'gameOver' }],
      },
    ],
  },
  tinder3: {
    id: 'tinder3',
    unique: true,
    description: 'Christine, 24 jaar en echt heel erg leuk.',
    choices: [
      {
        name: 'Nee',
        actions: [{ type: 'nextCard', id: 'gameOver' }],
      },
      {
        name: 'Ja!',
        actions: [{ type: 'nextCard', id: 'inLove' }],
      },
    ],
  },
  inLove: {
    id: 'inLove',
    unique: true,
    // todo: opmerkelijke gebeurtenis vinden?
    description: 'Een paar dates verder en jullie zijn een setje.',
    choices: [
      {
        name: 'Yes!',
        actions: [{ type: 'updateStats', joy: LARGE }, { type: 'nextCard' }],
      },
      {
        name: 'Ok dan!',
        actions: [{ type: 'updateStats', joy: LARGE }, { type: 'nextCard' }],
      },
    ],
  },
  ajaxWins: {
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
  ajaxLoses: {
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
  dontFeelLikeWorking: {
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
  tiesCalls: {
    id: 'tiesCalls',
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
  carBrokeDown: {
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
  nightWithChristine: {
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
  playSquashWithChristine: {
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
  running: {
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
  friendsBirthday: {
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
  specialtyBeer: {
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
  defqon: {
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
  birthday: {
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
}
