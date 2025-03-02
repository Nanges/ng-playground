import { InjectionToken } from "@angular/core";

export enum LogLevel {
    Debug=0,
    Log=1,
    Info=2,
    Warn=3,
    Error=4
}

export const LOG_LEVEL = new InjectionToken<LogLevel>("Log level", {
    providedIn:'root',
    factory:() => LogLevel.Debug
});