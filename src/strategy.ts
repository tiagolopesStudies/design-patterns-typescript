import { CarRoute } from './classes/strategy/car-route'
import { Navigation } from './classes/strategy/navigation'
import { WalkingRoute } from './classes/strategy/walking-route'

const navigation = new Navigation()
navigation.setStrategy(new CarRoute())
navigation.calculateRoute('Americana', 'São Paulo')

navigation.setStrategy(new WalkingRoute())
navigation.calculateRoute('Santos', 'New York')
