export default {
  babyIsBorn: {
    id: 'babyIsBorn',
    unique: true,
    name: 'Gefeliciteerd!',
    description: 'Het is een…',
    choices: [
      {
        name: 'Jongetje',
        mutations: [{ type: 'setGender', gender: 'boy' }, { type: 'nextCard' }],
      },
      {
        name: 'Meisje',
        mutations: [
          { type: 'setGender', gender: 'girl' },
          { type: 'nextCard' },
        ],
      },
    ],
  },
  a: {
    id: 'a',
    unique: true,
    name: 'A',
    description: '',
    choices: [
      {
        name: 'left',
        mutations: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        mutations: [{ type: 'nextCard' }],
      },
    ],
  },
  b: {
    id: 'b',
    unique: true,
    name: 'B',
    description: '',
    choices: [
      {
        name: 'left',
        mutations: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        mutations: [{ type: 'nextCard' }],
      },
    ],
  },
  C: {
    id: 'c',
    name: 'C',
    description: '',
    choices: [
      {
        name: 'left',
        mutations: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        mutations: [{ type: 'nextCard' }],
      },
    ],
  },
}
