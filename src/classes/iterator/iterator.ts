export class Iterator<T = unknown> {
  private index: number

  constructor(private collection: T[]) {
    this.index = 0
  }

  public hasNext(): boolean {
    return this.index < this.collection.length
  }

  public next(): T {
    const item = this.collection[this.index]
    this.index++
    return item
  }

  public hasPrevious(): boolean {
    return this.index > 0
  }

  public previous(): T {
    this.index--
    return this.collection[this.index]
  }
}
