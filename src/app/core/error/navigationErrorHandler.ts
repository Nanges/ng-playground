import { inject } from "@angular/core";
import { NavigationError, RedirectCommand, Router } from "@angular/router";
import { ErrorType, isBaseError } from "./models";
import { ERROR_PATH } from "./constants";
import { LoggerService } from "@core/logging";

export function navigationErrorHandler(navigationError: NavigationError): RedirectCommand {
    inject(LoggerService).error(navigationError);

    const {error:innerError} = navigationError;
    const errorType: ErrorType = isBaseError(innerError)
        ? innerError.type
        : 'Internal';
    
    const redirectPath = inject(Router).parseUrl(`/${ERROR_PATH[errorType]}`);

    // By skipping location change, we preserve url
    return new RedirectCommand(redirectPath, {skipLocationChange:true});
}