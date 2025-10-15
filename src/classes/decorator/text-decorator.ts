import { Text } from './text'

export class TextDecorator extends Text {
  protected text: Text
  constructor(text: Text) {
    super(text.content)
    this.text = text
  }

  public render(): string {
    return this.text.render()
  }
}
