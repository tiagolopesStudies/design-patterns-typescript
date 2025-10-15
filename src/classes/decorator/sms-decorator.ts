import { NotificatorDecorator } from './notificator-decorator'

export class SmsDecorator extends NotificatorDecorator {
  notify(message: string): void {
    super.notify(`SMS: ${message}`)
  }
}
