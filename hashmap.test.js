const HashMap = require('./hashmap')

test('set and get', () => {
  const map = new HashMap()
  map.set('foo', 'bar')
  const result = map.get('foo')
  expect(result).toBe('bar')
})

const items = [
  {"Hobbit": "Bilbo"},
  {"Hobbit": "Frodo"},
  {"Wizard": "Gandalf"},
  {"Human": "Aragorn"},
  {"Elf": "Legolas"},
  {"Maiar": "The Necromancer"},
  {"Maiar": "Sauron"},
  {"RingBearer": "Gollum"},
  {"LadyOfLight": "Galadriel"},
  {"HalfElven": "Arwen"},
  {"Ent": "Treebeard"}
]

const makeMap = () => {
  const map = new HashMap()
  for (let item of items) {
    const [key, val] = Object.entries(item)[0]
    map.set(key, val)
  }

  return map
}

test('retrieves the correct value', () => {
  const map = makeMap()
  expect(map.get('Hobbit')).toBe('Frodo')
})
