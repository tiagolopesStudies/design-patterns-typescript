import type { Observer } from './observer'

export abstract class Subject {
  protected observers: Observer[] = []

  abstract addObservers(...observers: Observer[]): void

  abstract removeObserver(observer: Observer): void

  abstract notificate(): void
}
