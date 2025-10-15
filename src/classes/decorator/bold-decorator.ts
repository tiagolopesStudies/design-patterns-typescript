import { TextDecorator } from './text-decorator'

export class BoldDecorator extends TextDecorator {
  public render(): string {
    return `<b>${super.render()}</b>`
  }
}
