import chalk from 'chalk';

const debug = require('debug')('*');

export type LoggerMessage = string | object | boolean;

function logMessage(type: string, message: LoggerMessage): void {
  debug(`${type} ${message}`);
}

const logger = {
  created: (message: LoggerMessage) => logMessage(chalk.green('created:'), message),
  watching: (message: LoggerMessage) => logMessage(chalk.yellow('watching:'), message),
  deleted: (message: LoggerMessage) => logMessage(chalk.red('deleted:'), message),
  info: (message: LoggerMessage) => logMessage(chalk.blue('info:'), message),
};

export default logger;
