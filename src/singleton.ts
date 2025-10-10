import { SingletonLogger } from './classes/logger'

const logger1 = SingletonLogger.getInstance()
const logger2 = SingletonLogger.getInstance()

logger1.log('First log message')
logger2.log('Second log message')

console.log('Logger 1 Logs:', logger1.getLogs())
