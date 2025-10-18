import { RouteStrategy } from './route-strategy'

export class WalkingRoute extends RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculando rota à pé de ${from} até ${to}.`)
  }
}
