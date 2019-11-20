export default {
  babyIsBorn: {
    name: 'Gefeliciteerd!',
    description: 'Het is een…',
    choices: [
      {
        name: 'Jongetje',
        mutations: [{ type: 'setGender', gender: 'boy' }],
      },
      {
        name: 'Meisje',
        mutations: [{ type: 'setGender', gender: 'girl' }],
      },
    ],
  },
}
