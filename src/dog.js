// @flow

class Dog {
  name: string

  constructor (name: string) {
    this.name = name
  }

  bark () {
    return `Wah wah, I a ${this.name}`
  }
}

export default Dog
