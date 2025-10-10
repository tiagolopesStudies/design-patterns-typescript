import type { PizzaBuilder } from './pizza-builder'

export class PizzaDirector {
  constructor(private readonly builder: PizzaBuilder) {}

  makeMargherita() {
    return this.builder
      .setSize('medium')
      .setCrust('thin')
      .setCheese(true)
      .addTopping('tomato')
      .addTopping('mozzarella')
      .build()
  }

  makePepperoni() {
    return this.builder
      .setSize('large')
      .setCrust('regular')
      .setCheese(true)
      .addTopping('tomato sauce')
      .addTopping('mozzarella')
      .addTopping('pepperoni')
      .build()
  }
}
