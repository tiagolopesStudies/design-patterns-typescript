import { RouteStrategy } from './route-strategy'

export class PublicTransportRoute extends RouteStrategy {
  calculateRoute(from: string, to: string): void {
    console.log(`Calculando de transporte público de ${from} até ${to}.`)
  }
}
