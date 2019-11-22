export default {
  babyIsBorn: {
    id: 'babyIsBorn',
    unique: true,
    name: 'Gefeliciteerd!',
    description: 'Het is een…',
    // todo: random 'jongetje/meisje' en 'transgender/non-binair/overig'
    choices: [
      {
        name: 'Jongetje',
        actions: [
          { type: 'setGender', gender: 'boy' },
          { type: 'pickCard', id: 'firstDay' },
        ],
      },
      {
        name: 'Meisje',
        actions: [
          { type: 'setGender', gender: 'girl' },
          { type: 'pickCard', id: 'firstDay' },
        ],
      },
    ],
  },
  firstDay: {
    id: 'firstDay',
    unique: true,
    name: 'Dag 1',
    description: '',
    choices: [
      {
        name: 'left',
        actions: [{ type: 'randomCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'randomCard' }],
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
        actions: [{ type: 'randomCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'randomCard' }],
      },
    ],
  },
  c: {
    id: 'c',
    name: 'C',
    description: '',
    choices: [
      {
        name: 'left',
        actions: [{ type: 'randomCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'randomCard' }],
      },
    ],
  },
}
