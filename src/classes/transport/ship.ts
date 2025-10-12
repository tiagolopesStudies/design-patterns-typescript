import { Transport } from './transport'

export class Ship extends Transport {
  send(): void {
    console.log('Enviando por navio')
  }
}
