export const pickRandom = array =>
  array[Math.floor(Math.random() * array.length)]

export const between0And100 = amount => Math.max(0, Math.min(100, amount))

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const move = (array, from, to) => {
  const copy = [...array]
  copy.splice(to, 0, copy.splice(from, 1)[0])
  return copy
}

export const index = (array, id) => array.findIndex(item => item.id === id)
