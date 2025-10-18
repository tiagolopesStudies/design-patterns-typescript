import type { RouteStrategy } from './route-strategy'

export class Navigation {
  private strategy?: RouteStrategy

  public setStrategy(strategy: RouteStrategy) {
    this.strategy = strategy
  }

  public calculateRoute(from: string, to: string) {
    if (!this.strategy) {
      throw new Error('Strategy not defined')
    }

    this.strategy.calculateRoute(from, to)
  }
}
