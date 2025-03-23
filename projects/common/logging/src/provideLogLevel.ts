import { Provider, EnvironmentProviders } from "@angular/core";
import { LOG_LEVEL, LogLevel } from "./LogLevel";

export function provideLogLevel(level: LogLevel): Provider | EnvironmentProviders {
    return {
        provide: LOG_LEVEL,
        useValue: level
    }
}