import { Truck } from '../transport/truck'
import { MaritimeLogistic } from './maritime-logistic'

export class LandLogistic extends MaritimeLogistic {
  makeTransport() {
    return new Truck()
  }
}
