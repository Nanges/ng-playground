import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RedirectCommand, Router, withNavigationErrorHandler, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withRouterConfig({
        // Allow to keep full url on error
        urlUpdateStrategy:'eager'
      }),
      withNavigationErrorHandler(error => {
        const errorPath = inject(Router).parseUrl('/not-found');
        console.error(error);
        return new RedirectCommand(errorPath,{skipLocationChange:true});
      })
    )
  ]
};
