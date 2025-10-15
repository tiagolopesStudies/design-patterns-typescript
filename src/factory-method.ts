import { LandLogistic } from './classes/factory-method/land-logistic'
import type { Logistic } from './classes/factory-method/logistic'
import { MaritimeLogistic } from './classes/factory-method/maritime-logistic'

let logistc: Logistic

const logisticType = process.argv[2] || 'land'

switch (logisticType) {
  case 'land':
    logistc = new LandLogistic()
    break
  case 'maritime':
    logistc = new MaritimeLogistic()
    break
  default:
    throw new Error('Logistic type not supported')
}

logistc.sendLoad()
