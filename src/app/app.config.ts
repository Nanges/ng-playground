import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withNavigationErrorHandler, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { navigationErrorHandler } from '@core/error';
import { LogLevel, provideLogLevel } from '@core/logging';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLogLevel(LogLevel.Log),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withRouterConfig({
        // Allow to keep full url on error
        urlUpdateStrategy:'eager'
      }),
      withNavigationErrorHandler(navigationErrorHandler),
    )
  ]
};
