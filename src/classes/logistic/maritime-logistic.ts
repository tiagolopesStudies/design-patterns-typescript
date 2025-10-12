import { Ship } from '../transport/ship'
import { Logistic } from './logistic'

export class MaritimeLogistic extends Logistic {
  makeTransport() {
    return new Ship()
  }
}
