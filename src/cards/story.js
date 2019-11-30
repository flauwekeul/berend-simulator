// story cards are played once and in order (but other cards may be played in between)
export default [
  {
    id: 'startDating',
    unique: true,
    description: 'Het is 2015 (?), Berend is nog single en zit op Tinder.',
    choices: [
      {
        name: 'Ok',
        actions: [{ type: 'nextCard', id: 'tinder1' }],
      },
      {
        name: 'Prima',
        actions: [{ type: 'nextCard', id: 'tinder1' }],
      },
    ],
  },
]
