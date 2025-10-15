import { MaritimeLogistic } from './maritime-logistic'
import { Truck } from './truck'

export class LandLogistic extends MaritimeLogistic {
  makeTransport() {
    return new Truck()
  }
}
