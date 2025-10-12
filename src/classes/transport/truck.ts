import { Transport } from './transport'

export class Truck extends Transport {
  send(): void {
    console.log('Enviando por caminhão')
  }
}
