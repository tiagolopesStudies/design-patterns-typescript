import { RouteStrategy } from './route-strategy'

export class CarRoute extends RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculando rota de carro de ${from} até ${to}.`)
  }
}
