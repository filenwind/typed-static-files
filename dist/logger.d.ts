export declare type LoggerMessage = string | object | boolean;
declare const logger: {
    created: (message: LoggerMessage) => void;
    watching: (message: LoggerMessage) => void;
    deleted: (message: LoggerMessage) => void;
    info: (message: LoggerMessage) => void;
};
export default logger;
