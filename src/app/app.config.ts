import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withNavigationErrorHandler, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { navigationErrorHandler } from '@core/error';

export const appConfig: ApplicationConfig = {
  providers: [
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
