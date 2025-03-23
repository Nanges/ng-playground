/**
 * Based on interface Console (@types/globals.d.ts)
 */
export interface Logger {
    log(...data: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;

    debug(...data: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;

    info(...data: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;

    warn(...data: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;

    error(...data: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}