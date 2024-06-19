import pluralize = require('pluralize')

export class LettersCases {
  private value: string
  constructor(value: string) {
    this.value = value
  }

  public Plural(): string {
    return pluralize(this.value)
  }

  public CamelToSnake(): string {
    return this.value.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase()
  }

  public UpperCase(): string {
    return this.value.toUpperCase()
  }

  public Capitalizer(): string {
    return this.value.charAt(0).toUpperCase() + this.value.slice(1)
  }
}
