import { NotificatorDecorator } from './notificator-decorator'

export class SlackDecorator extends NotificatorDecorator {
  notify(message: string): void {
    super.notify(`Slack: ${message}`)
  }
}
