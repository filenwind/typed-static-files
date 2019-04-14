"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var constants_1 = require("./constants");
function getDeclareFilePath(_a) {
    var filePath = _a.filePath, cwd = _a.cwd;
    if (filePath.endsWith(constants_1.declareExt)) {
        return filePath;
    }
    return path_1.default.resolve(cwd, "" + filePath + constants_1.declareExt);
}
exports.default = getDeclareFilePath;
