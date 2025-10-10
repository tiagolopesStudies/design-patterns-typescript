import { Pizza } from './pizza'

export class PizzaBuilder {
  private size: string
  private crust: string
  private hasCheese: boolean
  private toppings: string[]

  constructor() {
    this.size = 'medium'
    this.crust = 'regular'
    this.hasCheese = true
    this.toppings = []
  }

  setSize(size: string): PizzaBuilder {
    this.size = size
    return this
  }

  setCrust(crust: string): PizzaBuilder {
    this.crust = crust
    return this
  }

  setCheese(hasCheese: boolean): PizzaBuilder {
    this.hasCheese = hasCheese
    return this
  }

  addTopping(topping: string): PizzaBuilder {
    this.toppings.push(topping)
    return this
  }

  build() {
    return new Pizza(this.size, this.crust, this.hasCheese, this.toppings)
  }
}
