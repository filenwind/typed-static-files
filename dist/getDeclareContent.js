"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var outdent_1 = __importDefault(require("outdent"));
var eol_1 = __importDefault(require("eol"));
var eolContent = {
    lf: '',
    cr: '',
    crlf: '',
    auto: '',
};
function getDeclareContent(_a) {
    var eol = _a.eol;
    if (!eolContent[eol]) {
        eolContent[eol] = eol_1.default[eol](outdent_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      declare const value: string;\n      export default value;\n\n    "], ["\n      declare const value: string;\n      export default value;\n\n    "]))));
    }
    return eolContent[eol];
}
exports.default = getDeclareContent;
var templateObject_1;
