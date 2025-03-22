import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { CORE_ROUTES } from '@core/core.routes';
import { ERROR_PATH } from '@core/error';

export const routes: Routes = [
    ...CORE_ROUTES,
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    },
    {
        path:"**",
        redirectTo:`/${ERROR_PATH.NotFound}`
    }
];
