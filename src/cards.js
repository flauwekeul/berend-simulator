export default {
  babyIsBorn: {
    id: 'babyIsBorn',
    unique: true,
    name: 'Gefeliciteerd!',
    description: 'Het is een…',
    choices: [
      {
        name: 'Jongetje',
        actions: [{ type: 'setGender', gender: 'boy' }, { type: 'nextCard' }],
      },
      {
        name: 'Meisje',
        actions: [{ type: 'setGender', gender: 'girl' }, { type: 'nextCard' }],
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
        actions: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'nextCard' }],
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
        actions: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'nextCard' }],
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
        actions: [{ type: 'nextCard' }],
      },
      {
        name: 'right',
        actions: [{ type: 'nextCard' }],
      },
    ],
  },
}
