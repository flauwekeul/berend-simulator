import { randomNumber } from './utils'

export default {
  ajaxWins: {
    id: 'ajaxWins',
    name: 'Ajax wint!',
    description: () => {
      const win = randomNumber(1, 5)
      const loss = randomNumber(0, win - 1)
      return `Met ${win}-${loss}!`
    },
    choices: [
      {
        name: 'Ok dan!',
        actions: [{ type: 'updateStats', joy: 15 }, { type: 'randomCard' }],
      },
      {
        name: 'Yes, zuipe!',
        actions: [
          { type: 'updateStats', joy: 10, money: -5 },
          { type: 'randomCard' },
        ],
      },
    ],
  },
}
