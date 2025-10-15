import { TextDecorator } from './text-decorator'

export class UnderlineDecorator extends TextDecorator {
  public render(): string {
    return `<u>${super.render()}</u>`
  }
}
