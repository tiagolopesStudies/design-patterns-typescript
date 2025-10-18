import type { Observer } from './observer'
import { Subject } from './subject'

export class Store extends Subject {
  addObservers(...observers: Observer[]): void {
    observers.forEach((item) => {
      this.observers.push(item)
    })
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((current) => current !== observer)
  }

  notificate(): void {
    this.observers.forEach((current) => {
      current.update()
    })
  }

  receiveProduct() {
    console.log('Novo produto chegou à loja')
    this.notificate()
  }
}
