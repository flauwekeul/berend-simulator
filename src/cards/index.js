// card types
import { pickRandom } from '../utils'
import common from './common'
import serial from './serial'
import story from './story'
import terminal from './terminal'

// public API

export const clone = card => ({ ...card })

export const DRAWABLE = [
  ...common,
  ...serial.map(series => series[0]),
  ...story,
].map(clone)

export const ALL = [...common, ...serial.flat(), ...story, ...terminal].map(
  clone,
)

export const START = clone(story.find(card => card.id === 'startDating'))

export const byId = id => clone(ALL.find(card => card.id === id))

export const random = cards => clone(pickRandom(cards))
