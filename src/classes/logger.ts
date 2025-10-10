export class SingletonLogger {
  private static instance: SingletonLogger
  private logs: string[] = []

  private constructor() {}

  public static getInstance(): SingletonLogger {
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new SingletonLogger()
    }
    return SingletonLogger.instance
  }

  public log(message: string): void {
    this.logs.push(message)
  }

  public getLogs(): string[] {
    return this.logs
  }
}
