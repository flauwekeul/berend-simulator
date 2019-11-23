import { LARGE } from './stat-deltas'

// serial cards are played in order, without interruption
// it's an array of arrays, because each inner array is a series, the first card being the start of that series
export default [
  [
    {
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
    {
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
    {
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
    {
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
  ],
]
