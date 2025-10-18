export abstract class RouteStrategy {
  abstract calculateRoute(from: string, to: string): void
}
