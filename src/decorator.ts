import { BoldDecorator } from './classes/decorator/bold-decorator'
import { ItalicDecorator } from './classes/decorator/italic-decorator'
import { Notificator } from './classes/decorator/notificator'
import { SlackDecorator } from './classes/decorator/slack-decorator'
import { SmsDecorator } from './classes/decorator/sms-decorator'
import { Text } from './classes/decorator/text'
import { TextDecorator } from './classes/decorator/text-decorator'
import { UnderlineDecorator } from './classes/decorator/underline-decorator'

let text = new TextDecorator(new Text('Hello, World!'))

text = new BoldDecorator(new UnderlineDecorator(text))
text = new ItalicDecorator(text)
console.log(text.render())

let notificator = new Notificator()
notificator = new SmsDecorator(notificator)
notificator = new SlackDecorator(notificator)

notificator.notify('Você recebeu uma nova mensagem!')
