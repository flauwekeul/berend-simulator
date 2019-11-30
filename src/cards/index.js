// card types
import { pickRandom } from '../utils'
import common from './common'
import serial from './serial'
import story from './story'
import terminal from './terminal'

// public API

export const clone = card => ({ ...card })

export const ALL = [...common, ...serial.flat(), ...story, ...terminal].map(
  clone,
)

export const START = clone(story.find(card => card.id === 'startDating'))

export const FIRST_OF_EACH_SERIE = serial.map(series => clone(series[0]))

export const DRAWABLE = [...common, ...FIRST_OF_EACH_SERIE, ...story].map(clone)

export const byId = id => clone(ALL.find(card => card.id === id))

export const playable = playedUniqueCardIds =>
  DRAWABLE.filter(card => !playedUniqueCardIds.has(card.id)).map(clone)

export const random = cards => clone(pickRandom(cards))
