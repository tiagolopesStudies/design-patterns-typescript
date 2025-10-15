import { TextDecorator } from './text-decorator'

export class ItalicDecorator extends TextDecorator {
  public render(): string {
    return `<i>${super.render()}</i>`
  }
}
