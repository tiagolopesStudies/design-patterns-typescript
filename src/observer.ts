import { Client } from './classes/observer/client'
import { Store } from './classes/observer/store'

const store = new Store()
const clientA = new Client('Pedro')
const clientB = new Client('Joana')
const clientC = new Client('Rafaela')

store.addObservers(clientA, clientB, clientC)
store.removeObserver(clientB)

store.receiveProduct()
