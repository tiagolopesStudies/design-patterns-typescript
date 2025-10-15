import { Notificator } from './notificator'

export class NotificatorDecorator extends Notificator {
  constructor(private notificator: Notificator) {
    super()
  }

  notify(message: string): void {
    this.notificator.notify(message)
  }
}
