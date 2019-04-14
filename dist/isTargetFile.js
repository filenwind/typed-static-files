"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function isTargetFile(_a) {
    var extensions = _a.extensions, filePath = _a.filePath;
    return extensions.some(function (extension) {
        if (filePath.endsWith(constants_1.declareExt)) {
            return false;
        }
        return extension === '*' || filePath.endsWith("." + extension);
    });
}
exports.default = isTargetFile;
