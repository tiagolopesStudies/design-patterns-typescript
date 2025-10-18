import type { Observer } from './observer'

export class Client implements Observer {
  public constructor(private readonly name: string) {}

  update(): void {
    console.log(`Cliente ${this.name}: Produto disponível!`)
  }
}
