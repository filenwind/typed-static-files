"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var debug = require('debug')('*');
function logMessage(type, message) {
    debug(type + " " + message);
}
var logger = {
    created: function (message) { return logMessage(chalk_1.default.green('created:'), message); },
    watching: function (message) { return logMessage(chalk_1.default.yellow('watching:'), message); },
    deleted: function (message) { return logMessage(chalk_1.default.red('deleted:'), message); },
    info: function (message) { return logMessage(chalk_1.default.blue('info:'), message); },
};
exports.default = logger;
