import { LARGE, MEDIUM, SMALL } from './stat-deltas'

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
  [
    {
      id: 'alcohol1',
      unique: true,
      description: `Zaterdagavond, lekker 'n pilske vatte.`,
      choices: [
        {
          name: 'Lekker!',
          actions: [{ type: 'nextCard', id: 'alcohol2' }],
        },
        {
          name: 'Wel alcoholvrij',
          actions: [{ type: 'nextCard' }],
        },
      ],
    },
    {
      id: 'alcohol2',
      unique: true,
      description: `Op één been kan je niet staan, nog een biertje.`,
      choices: [
        {
          name: 'Lekker!',
          actions: [
            { type: 'updateStats', joy: SMALL },
            { type: 'nextCard', id: 'alcohol3' },
          ],
        },
        {
          name: 'Nee, mooi geweest',
          actions: [{ type: 'nextCard' }],
        },
      ],
    },
    {
      id: 'alcohol3',
      unique: true,
      description: `Komaan, nog een paar.`,
      choices: [
        {
          name: 'Lekker!',
          actions: [
            { type: 'updateStats', joy: SMALL, money: -SMALL },
            { type: 'nextCard', id: 'alcohol4' },
          ],
        },
        {
          name: 'Hm, nee',
          actions: [{ type: 'nextCard' }],
        },
      ],
    },
    {
      id: 'alcohol4',
      unique: true,
      description: `🎶 Ik wil seks met die kaaaaluuh! 🎶`,
      choices: [
        {
          name: 'Hoppaaah!',
          actions: [
            { type: 'updateStats', joy: SMALL, money: -SMALL, energy: -SMALL },
            { type: 'nextCard', id: 'alcohol5' },
          ],
        },
        {
          name: 'Pff, nee naar huis',
          actions: [{ type: 'nextCard' }],
        },
      ],
    },
    {
      id: 'alcohol5',
      unique: true,
      description: `Gohverdomme, lekke mahn! Ech 'n topafond so!`,
      choices: [
        {
          name: 'HUUJ!',
          actions: [
            {
              type: 'updateStats',
              joy: -SMALL,
              money: -SMALL,
              energy: -MEDIUM,
            },
            { type: 'nextCard', id: 'alcohol6' },
          ],
        },
        {
          name: 'Grblmm',
          actions: [
            {
              type: 'updateStats',
              joy: -SMALL,
              money: -SMALL,
              energy: -MEDIUM,
            },
            { type: 'nextCard', id: 'alcohol6' },
          ],
        },
      ],
    },
    {
      id: 'alcohol6',
      unique: true,
      description: `🤮🤮🤮💩🤮`,
      choices: [
        {
          name: '🤢',
          actions: [
            { type: 'updateStats', joy: -LARGE, energy: -LARGE },
            { type: 'nextCard' },
          ],
        },
        {
          name: '😴',
          actions: [
            { type: 'updateStats', joy: -LARGE, energy: -LARGE },
            { type: 'nextCard' },
          ],
        },
      ],
    },
  ],
]
