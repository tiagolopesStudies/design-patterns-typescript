import { Logistic } from './logistic'
import { Ship } from './ship'

export class MaritimeLogistic extends Logistic {
  makeTransport() {
    return new Ship()
  }
}
