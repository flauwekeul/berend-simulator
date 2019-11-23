// terminal cards are cards that end the game
export default [
  {
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
]
