//Dictionary is like a variable that has built-in methods.

class Dictionary {
  public add(key: string, value: string) {
    this[key] = value; //bracket notation
    this.length++;
    }
  public remove(key: string) {
    // delete this[key];
    if(this[key] && this.length > 0) this.length--;
    this[key] = undefined;
  }
  public find(key: string) {
    return this[key];
  }
  public rename(og: string, newName: string) {
    let value = this[og];
    this[newName] = value;
    this[og] = undefined;
  }

  public findLength() {
    let result = 0;
    for(let key in this) {
      if(this[key] !== undefined && this.hasOwnProperty(key)) {
        result++;
      }
    }
  }

  public length: number = 0;
}

let d = new Dictionary();
