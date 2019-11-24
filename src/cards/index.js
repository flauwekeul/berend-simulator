// card types
import { pickRandom } from '../utils'
import common from './common'
import serial from './serial'
import story from './story'
import terminal from './terminal'

// public API

export const ALL = [...common, ...serial.flat(), ...story, ...terminal]

export const START = story.find(card => card.id === 'startDating')

export const FIRST_OF_EACH_SERIE = serial.map(series => series[0])

export const DRAWABLE = [...common, ...FIRST_OF_EACH_SERIE, ...story]

export const byId = id => ALL.find(card => card.id === id)

export const playable = playedUniqueCardIds =>
  DRAWABLE.filter(card => !playedUniqueCardIds.has(card.id))

export const random = cards => pickRandom(cards)
