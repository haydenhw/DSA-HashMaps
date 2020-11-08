class HashMap {
  constructor() {
    this._capacity = 8
    this.length = 0
    this._hashTable = []
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  findIndex(key) {
    const hash = HashMap._hashString(key)
    const start = hash % this._capacity

    for (let i = start; i < start + this._capacity ; i++) {
      const index = i % this._capacity
      const slot = this._hashTable[index]
      if (slot === undefined || slot.key === key) {
        return index
      }
    }
  }

  set(key, value){
    // TODO make sure there is enough space
    // TODO increment length
    const index = this.findIndex(key)
    this._hashTable[index] =  {
      key,
      value
    }
  }

  get(key) {
    const index = this.findIndex(key)
    return this._hashTable[index].value
  }
}


module.exports = HashMap


















