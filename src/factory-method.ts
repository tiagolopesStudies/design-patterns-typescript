import { LandLogistic } from './classes/logistic/land-logistic'
import type { Logistic } from './classes/logistic/logistic'
import { MaritimeLogistic } from './classes/logistic/maritime-logistic'

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
