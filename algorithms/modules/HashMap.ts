interface KeyValue {
  key: string;
  value: string;
}
class HashTable<T> {
  keymap: KeyValue[][];
  constructor(size = 4) {
    this.keymap = new Array(size);
  }
  _hash(key: string): number {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(0) - 96;
      total = (total + PRIME + value) % this.keymap.length;
    }
    return total;
  }

  // accepts a key and value
  // hashes the key
  // stores the key value pair using separate chaining
  set(key: string, value: string) {
    let hash = this._hash(key);
    let values = this.keymap[hash];
    let keyValue: KeyValue = { 'key': key, 'value': value };

    if (values) {
      this.keymap[hash].push(keyValue);
    }
    else {
      let newArray = [];
      newArray.push(keyValue);
      this.keymap[hash] = newArray;
    }
  }

  set2(key: string, value: string) {
    let index = this._hash(key);
    if (!this.keymap[index]) {
      this.keymap[index] = [];
    }
    let keyValue: KeyValue = { 'key': key, 'value': value };
    this.keymap[index].push(keyValue);
  }

  // Accepts a key
  // Hashes the key
  // Retrieves the key-value pair in the hash table
  // If the key isn't found, returns undefined
  get(key: string) {
    let hash = this._hash(key);
    let values = this.keymap[hash];
    if (values) {
      let found = values.find(keyVal => {
        if (keyVal.key === key) {
          return keyVal;
        }
      })
      if (found) {
        return found.value;
      }
    }
  }

  keys() {
    let keys: string[] = [];
    for (let arr of this.keymap) {
      if (arr) {
        for (let elem of arr) {
          keys.push(elem.key);
        }
      }
    }
    return keys;
  }


  values() {
    let values: string[] = [];
    for (let arr of this.keymap) {
      if (arr) {
        for (let elem of arr) {
          values.push(elem.value);
        }
      }
    }
    return values;
  }


  print() {
    this.keymap.forEach((elem, index) => {
      elem.forEach((elem2, index) => {
        console.log(elem2);
      })
    })
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!");
// ht.print();
console.log();
ht.set("dogs", "are cool");
// ht.print();
console.log();
ht.set("cats", "are fine");
// ht.print();
console.log();
ht.set("i love", "pizza");
// ht.print();
console.log(``);
// console.log(ht.get("dogs"));
// console.log(ht.get("tigers"));
// console.log(ht.get("i love"));
console.log(ht.keys());
console.log(ht.values());
module.exports = { HashTable }
