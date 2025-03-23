import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { LOG_LEVEL, LogLevel } from './LogLevel';
import { ui } from '@common/ui';

ui();

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor(@Inject(LOG_LEVEL) private readonly logLevel:LogLevel) { }
  
  log(...data: any[]): void;
  log(message?: any, ...optionalParams: any[]): void;
  log(message?: unknown, ...optionalParams: unknown[]): void {
    this._log(LogLevel.Log, message, ...optionalParams);
  }
  
  debug(...data: any[]): void;
  debug(message?: any, ...optionalParams: any[]): void;
  debug(message?: unknown, ...optionalParams: unknown[]): void {
    this._log(LogLevel.Debug, message, ...optionalParams);
  }

  info(...data: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  info(message?: unknown, ...optionalParams: unknown[]): void {
    this._log(LogLevel.Info, message, ...optionalParams);
  }
  
  warn(...data: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  warn(message?: unknown, ...optionalParams: unknown[]): void {
    this._log(LogLevel.Warn, message, ...optionalParams);
  }

  error(...data: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  error(message?: unknown, ...optionalParams: unknown[]): void {
    this._log(LogLevel.Error, message, ...optionalParams);
  }

  private _log(level:LogLevel, message?: unknown, ...optionalParams: unknown[]): void{
    if(level < this.logLevel) return;

    switch(level){
      case LogLevel.Debug:
        console.debug(message, ...optionalParams);
      break;
      case LogLevel.Log:
        console.log(message, ...optionalParams);
      break;
      case LogLevel.Info:
        console.info(message, ...optionalParams);
      break;
      case LogLevel.Warn:
        console.warn(message, ...optionalParams);
      break;
      case LogLevel.Error:
        console.error(message, ...optionalParams);
      break;
    }
  }
}
