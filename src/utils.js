export const pickRandom = array =>
  array[Math.floor(Math.random() * array.length)]

export const between0And100 = amount => Math.max(0, Math.min(100, amount))

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min
