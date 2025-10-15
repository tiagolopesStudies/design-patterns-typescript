import { PizzaBuilder } from './classes/builder/pizza-builder'
import { PizzaDirector } from './classes/builder/pizza-director'

const pizzaBuilder = new PizzaBuilder()
const pizzaDirector = new PizzaDirector(pizzaBuilder)

const margheritaPizza = pizzaDirector.makeMargherita()
const pepperoniPizza = pizzaDirector.makePepperoni()

console.log(margheritaPizza)
console.log(pepperoniPizza)
