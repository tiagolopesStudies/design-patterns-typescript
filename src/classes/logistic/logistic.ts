import type { Transport } from '../transport/transport'

export abstract class Logistic {
  abstract makeTransport(): Transport

  sendLoad() {
    const transport = this.makeTransport()
    transport.send()
  }
}
