"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fast_glob_1 = __importDefault(require("fast-glob"));
var fs_1 = __importDefault(require("fs"));
var createDeclareFile_1 = __importDefault(require("./createDeclareFile"));
var constants_1 = require("./constants");
var isTargetFile_1 = __importDefault(require("./isTargetFile"));
var logger_1 = __importDefault(require("./logger"));
function fastMatchToStrings(match) {
    if (typeof match === 'string') {
        return match;
    }
    return match.path;
}
exports.fastMatchToStrings = fastMatchToStrings;
function removeUnusedDeclareFiles(_a) {
    var searchPatterns = _a.searchPatterns, cwd = _a.cwd, extensions = _a.extensions;
    return __awaiter(this, void 0, void 0, function () {
        var declarePatterns, declareFiles;
        return __generator(this, function (_b) {
            declarePatterns = searchPatterns.map(function (searchPattern) { return "" + searchPattern + constants_1.declareExt; });
            declareFiles = fast_glob_1.default.sync(declarePatterns, { cwd: cwd }).map(fastMatchToStrings);
            declareFiles.forEach(function (declareFile) {
                var dtsIndex = declareFile.lastIndexOf(constants_1.declareExt);
                var originFilePath = declareFile.substring(0, dtsIndex);
                if (!isTargetFile_1.default({ extensions: extensions, filePath: originFilePath })) {
                    return;
                }
                if (!fs_1.default.existsSync(originFilePath)) {
                    fs_1.default.unlink(declareFile, function (error) {
                        if (!error) {
                            logger_1.default.deleted(declareFile);
                        }
                    });
                }
            });
            return [2 /*return*/];
        });
    });
}
exports.removeUnusedDeclareFiles = removeUnusedDeclareFiles;
function creator(options) {
    return __awaiter(this, void 0, void 0, function () {
        var extensions, searchFolders, eol, cwd;
        return __generator(this, function (_a) {
            extensions = options.extensions, searchFolders = options.searchFolders, eol = options.eol, cwd = options.cwd;
            extensions.forEach(function (extension) {
                searchFolders.forEach(function (_searchFolder) {
                    var searchFolder = _searchFolder.endsWith('/') ? _searchFolder : _searchFolder + "/";
                    var searchPatterns = [searchFolder + "**/*." + extension];
                    var ignorePatterns = ["!*" + constants_1.declareExt];
                    if (options.autoDelete) {
                        removeUnusedDeclareFiles({ searchPatterns: searchPatterns, cwd: cwd, extensions: extensions });
                    }
                    fast_glob_1.default(searchPatterns.concat(ignorePatterns), { cwd: options.cwd }).then(function (_matches) {
                        var matches = _matches.map(fastMatchToStrings);
                        matches.forEach(function (match) {
                            createDeclareFile_1.default({
                                filePath: match,
                                eol: eol,
                            });
                        });
                    }).catch(function (e) {
                        throw e;
                    });
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.default = creator;
